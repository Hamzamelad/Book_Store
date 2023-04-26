from rest_framework import serializers
from books.models import Book, Song


class BookSerializer(serializers.ModelSerializer):

    class Meta:
        model = Book
        fields = "__all__"

class SongSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()

    def get_title(self, instance):
        return 'check'
  
    
    class Meta:
        model = Song
        fields = "__all__"