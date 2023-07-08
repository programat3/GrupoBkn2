from django.urls import path
from .views import home, productos, producto_tienda, ficha, nosotros

urlpatterns = [
    path('', home, name="home"),
    path('productos/<action>/<id>', productos, name="productos"),
    path('producto/tienda', producto_tienda, name="producto_tienda"),
    path('ficha/<id>', ficha, name="ficha"),
    path('nosotros', nosotros, name="nosotros"),
]

