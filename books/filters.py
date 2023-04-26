import django_filters
from .models import Book

class BookFilters(django_filters.FilterSet):
    title_contains = django_filters.CharFilter(field_name='title', lookup_expr='icontains')
    title_exact = django_filters.CharFilter(field_name='title', lookup_expr='exact')
    pup_year = django_filters.NumberFilter(field_name='pup_date', lookup_expr='year__gt')
    category_e = django_filters.CharFilter(field_name='categories', lookup_expr='exact')


    class Meta:
        model = Book
        fields = ['title', 'categories']
