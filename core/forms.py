from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Empleado
from .models import Receta, Producto
from django import forms

class ProductoForm(forms.ModelForm):
    class Meta:
        model = Producto
        fields = ['id_producto', 'nombre_producto', 'detalle_producto', 'cantidad_disponible', 'fecha_compra', 'valor_unitario']
        widgets = {
            'fecha_compra': forms.DateTimeInput(format="%a %b %d %H:%M",attrs={'readonly': 'readonly'}),
        }

class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']

class RecetaForm(forms.ModelForm):
    class Meta:
        model = Receta
        fields = ['id_receta', 'nombre_receta', 'detalle_receta', 'valor_receta']

class empleadoForm(ModelForm):
    class Meta:
        model = Empleado
        fields = "__all__"
