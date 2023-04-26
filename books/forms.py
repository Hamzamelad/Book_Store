from django import forms
from .models import Book


class PuplishForm(forms.ModelForm):
    # title = forms.CharField(max_length=200, required=False)
    # dis = forms.TextInput()
    # cover = forms.ImageField(required=False)

    class Meta:
        model = Book
        exclude = ['author', 'pup_date']
