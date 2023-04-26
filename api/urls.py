from django.urls import path, re_path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import Index, PasswordResetConfirmView, BooksList, IDoItMySelf, SongList

urlpatterns = [
    re_path(r"^password/reset/key/(?P<uidb36>[0-9A-Za-z]+)-(?P<key>.+)/$", PasswordResetConfirmView.as_view(), name='password_reset_confirmm'),
        
    path('jwt/token', TokenObtainPairView.as_view(), name='jwt_login'),
    path('jwt/token/refresh', TokenRefreshView.as_view(), name='jwt_refresh'),

    path('books/', Index.as_view(), name='api_books'),
    path('filter/books/', BooksList.as_view(), name='filter_books'),
    path('filter/ido/', IDoItMySelf.as_view(), name='filter_ido'),
    path('songs/', SongList.as_view(), name='api_songs'),

]

