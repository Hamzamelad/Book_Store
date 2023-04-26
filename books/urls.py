from django.urls import path, include
from .views import BookListView, BookDtailView, BookSearchView, BookPuplishView, PremiumView
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('list/', BookListView.as_view(), name='books_list'),
    path('<int:pk>/', include('books.rudurls')),
    path('search/', BookSearchView.as_view(), name='books_search'),
    path('puplish/', BookPuplishView.as_view(), name='book_puplish'),
    path('premium/', PremiumView.as_view(), name='premium'),
    

]

# if settings.DEBUG:
#     urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
