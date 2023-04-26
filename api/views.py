from rest_framework.permissions import AllowAny
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from dj_rest_auth.views import PasswordResetConfirmView
from django_filters import rest_framework as filters


from books.models import Book, Song
from .serializers import BookSerializer, SongSerializer
from books.filters import BookFilters

# Create your views here.
class Index(APIView):
    serializer_class = BookSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Book.objects.all()
    
    def get(self, request):
        q = BookSerializer(self.get_queryset(), many=True)
        return Response(q.data) 
        
    
class PasswordResetView(PasswordResetConfirmView):
    permission_classes = [AllowAny]
    pass


class BooksList(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('title', 'categories')


class IDoItMySelf(APIView):
    # permission_classes = [AllowAny]

    def get_queryset(self):
        request = self.request
        request.GET = request.GET.copy()
        if request.GET.get("category_e") == "all":
            request.GET.pop("category_e")
        f = BookFilters(request.GET, queryset=Book.objects.all())   
        print(f.qs) 
        return f.qs
    
    def get(self, request):
        s = BookSerializer(self.get_queryset(), many=True)
        return Response(s.data)


class SongList(generics.ListAPIView):
    permission_classes = [AllowAny]
    model = Song
    serializer_class = SongSerializer
    queryset = Song.objects.all()