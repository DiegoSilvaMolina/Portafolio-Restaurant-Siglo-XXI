
from django.contrib import admin
from django.urls import include,path
from django.conf.urls import include
from rest_framework.authtoken.views import obtain_auth_token
from django.views.generic import TemplateView



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('core.urls')),
    path('auth/', obtain_auth_token),
    path('', TemplateView.as_view(template_name='index.html')),
    #path('api/', include('core.urls')),
    
]
