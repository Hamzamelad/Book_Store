from django.db import models
from django.urls import reverse
from .managers import CustomManager


# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=500)
    dis = models.TextField()
    author = models.ForeignKey(
        "accounts.User", on_delete=models.CASCADE, related_name="books"
    )
    pup_date = models.DateField(auto_now_add=False, blank=True, null=True)
    cover = models.ImageField(
        upload_to="images/covers/",
        height_field=None,
        width_field=None,
        max_length=None,
        null=True,
    )
    sales = models.ForeignKey("books.Sale", on_delete=models.PROTECT, related_name='books', null=True, blank=True)
    categories = models.CharField(max_length=50, null=True, blank=True)


    # customManager = CustomManager()

    class Meta:
        #     default_manager_name = 'customManager'
        permissions = (
            ("can_create_more_than_one_book", "can create more than than one book"),
        )

    def get_absolute_url(self):
        return reverse('book_details', kwargs={'pk': self.pk})

    def __str__(self) -> str:
        return self.title

    
class Sale(models.Model):
    buyer = models.ForeignKey("accounts.User", on_delete=models.PROTECT, related_name='sales')


class Song(models.Model):
    title = models.CharField(max_length=50)
    audio = models.FileField(upload_to='audio/', max_length=None)
    
    