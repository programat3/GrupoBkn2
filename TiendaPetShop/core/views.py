from django.shortcuts import redirect,render
from .models import Categoria, Producto, Usuario, Compra
from .forms import ProductoForm

# Create your views here.

def home(request):
    return render(request, "core/index.html")

def producto_tienda(request):
    data = {"list": Producto.objects.all().order_by('idProducto')}
    return render(request, "core/productos.html", data)

def producto_ficha(request, id):
    producto = producto.objects.get(patente=id)
    data = {"producto":  producto}
    return render(request, "core/ficha.html", data)

