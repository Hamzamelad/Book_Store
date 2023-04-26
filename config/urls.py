from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.conf.urls.static import static

class IndexView(LoginRequiredMixin, TemplateView):
    template_name='home.html'

urlpatterns = [
    path("admin/", admin.site.urls),

    path('accounts/', include('allauth.urls')),
    path('accounts/', include('accounts.urls')),
    path('dj-auth/', include('django.contrib.auth.urls')),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('api-auth/', include('rest_framework.urls')),

    path('', IndexView.as_view(), name='home'),
    path('books/', include('books.urls')),

    path('api/', include('api.urls'))
         
]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
{
    "new_password1": "",
    "new_password2": "",
    "uid": "",
    "token": ""
}