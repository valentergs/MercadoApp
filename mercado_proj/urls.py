
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('admin/', admin.site.urls),
    path('', include('mercado_app.urls')),
    path('', include('accounts.urls'))
]
