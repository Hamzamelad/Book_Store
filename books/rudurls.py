from django.urls import path 
from .views import BookDtailView

urlpatterns = [
    path('details/', BookDtailView.as_view(), name='book_details'),
    
]