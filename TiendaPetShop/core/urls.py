from django.urls import path
from .views import home, producto, producto_tienda, producto_ficha

urlpatterns = [
    path('', home, name="home"),
    path('producto/<action>/<id>', producto, name="producto"),
    path('producto/tienda', producto_tienda, name="producto_tienda"),
    path('producto_ficha/<id>', producto_ficha, name="ficha"),
]

