from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views import View
from django.views.generic import ListView, DetailView, TemplateView
from django.views.generic.edit import CreateView
from django.contrib.auth.mixins import PermissionRequiredMixin
from braces.views import GroupRequiredMixin
from django.contrib import messages
import datetime

from .models import Book
from .filters import BookFilters
from .forms import PuplishForm


# Create your views here.
class BookListView(ListView):
    template_name = "book_list.html"
    model = Book
    context_object_name = "context"

    def get_queryset(self):
        request = self.request
        request.GET = request.GET.copy()
        if request.GET.get("category_e") == "all":
            request.GET.pop("category_e")
        q = BookFilters(request.GET, queryset=Book.objects.all())
        context = {"books": q.qs, "search": request.GET.get("title_contains") if request.GET.get("title_contains") else ''}
        return context


class BookDtailView(DetailView):
    template_name = "book_detail.html"
    model = Book
    context_object_name = "book"


class BookSearchView(View):
    def get(self, request, *args, **kwargs):
        if request.GET:
            q = BookFilters(request.GET, queryset=Book.objects.all())
            return render(request, "book_search.html", {"filters": q})
        return render(request, "book_search.html")


class BookPuplishView(GroupRequiredMixin, CreateView):
    group_required = u"premium"
    model = Book
    template_name = "book_create.html"
    form_class = PuplishForm
    login_url = 'premium'

    # def dispatch(self, request, *args, **kwargs):
    #     request = self.request
    #     if request.user.books.count() > 1:
    #         return render(request, 'premium.html')
    #     return super().dispatch(request, *args, **kwargs)

    def form_valid(self, form):
        book = form.save(commit=False)
        book.author = self.request.user
        book.pup_date = datetime.datetime.now()
        book.save()
        return super().form_valid(form)


class PremiumView(TemplateView):
    template_name = "premium.html"
