from django import forms
from django.forms import ModelForm, fields
from .models import Producto


class VehiculoForm(ModelForm):
    class Meta:
        model = Producto
        fields = ['idProducto', 'nombreProducto', 'precioProducto', 'stockProducto', 'imagenProducto', 'categoria']