from django_filters import rest_framework as filters
from books.models import Book


class BookFilters(filters.FilterSet):
    title_contains = filters.CharFilter(field_name='title', lookup_expr='icontains')
    title_exact = filters.CharFilter(field_name='title', lookup_expr='exact')
    pup_year = filters.NumberFilter(field_name='pup_date', lookup_expr='year__gt')
    category_e = filters.CharFilter(field_name='categories', lookup_expr='exact')

    class Meta:
        model = Book
        fields = ['title', 'categories']