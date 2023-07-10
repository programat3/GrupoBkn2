from django.urls import path
from .views import home, productos, producto_tienda, ficha, nosotros, administracion, bodega, boleta, carrito, historial_ventas, ingresar, mis_compras, misdatos, registro, ropa, usuarios

urlpatterns = [
    path('', home, name="home"),
    path('productos/<action>/<id>', productos, name="productos"),
    path('producto/tienda', producto_tienda, name="producto_tienda"),
    path('ficha/<id>', ficha, name="ficha"),
    path('nosotros', nosotros, name="nosotros"),
    path('administracion', administracion, name='administracion'),
    path('bodega', bodega, name='bodega'),
    path('boleta', boleta, name='boleta'),
    path('carrito', carrito, name='carrito'),
    path('historial_ventas', historial_ventas, name='historial_ventas'),
    path('ingresar', ingresar, name='ingresar'),
    path('mis_compras', mis_compras, name='mis_compras'),
    path('misdatos', misdatos, name='misdatos'),
    path('registro', registro, name='registro'),
    path('ropa', ropa, name='ropa'),
    path('usuarios', usuarios, name='usuarios'),
]

