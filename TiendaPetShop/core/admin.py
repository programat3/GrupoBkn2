from django.contrib import admin
from .models import Categoria, Producto, Usuario, Compra

# Register your models here.
admin.site.register(Categoria)
admin.site.register(Producto)
admin.site.register(Usuario)
admin.site.register(Compra)