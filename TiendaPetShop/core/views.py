from django.shortcuts import redirect,render
from .models import Categoria, Producto, Usuario, Compra
from .forms import ProductoForm

# Create your views here.

def home(request):
    data = {"list": Producto.objects.all().order_by('idProducto')}
    return render(request, "core/index.html",data)


def producto_tienda(request):
    data = {"list": Producto.objects.all().order_by('idProducto')}
    return render(request, "core/productos.html", data)

def ficha(request, id):
    producto = Producto.objects.get(idProducto=id)
    data = {"producto":  producto}
    return render(request, "core/ficha.html", data)

def productos(request, action, id):
    data = {"mesg": "", "form": ProductoForm, "action": action, "id":id}

    if action == 'ins':
        if request.method == "POST":
            form = ProductoForm(request.POST, request.FILES)
            if form.is_valid:
                try:
                    form.save()
                    data["mesg"] = "¡El producto fue creado correctamente!"
                except:
                    data["mesg"] = "¡No se puede crear dos productos con el mismo id!"
    elif action == "upd":
        objeto = Producto.objects.get(idProducto = id)
        if request.method == 'POST':
            form = ProductoForm(data=request.POST, files=request.FILES, instance=objecto)
            if form.is_valid:
                form.save()
                data["mesg"] = "¡El producto fue actualizado correctamente!"
        data["form"] = ProductoForm(instance=objeto)

    elif action == "del":
        try:
            Producto.objects.get(idProducto=id).delete()
            data["mesg"] = "¡El vehículo fue eliminado correctamente!"
            return redirect(producto, action='ins', id = '-1')
        except:
            data["mesg"] = "El producto ya estaba eliminado"

    data["list"] = Producto.objects.all().order_by('idProducto')
    return render(request, "core/productos.html", data)

def nosotros(request):
    return render(request, "core/nosotros.html")