from django.db import models
from django.contrib.auth.models import AbstractUser
from django.dispatch import receiver
from allauth.account.models import EmailAddress
from allauth.account.signals import email_confirmed

# Create your models here.
class User(AbstractUser):
    age = models.PositiveIntegerField(null=True)

    def __str__(self):
        return self.username
    
    
@receiver(email_confirmed)
def update_user_email(sender, request, email_address, **kwargs):
    email_address.set_as_primary()
    stale_addresses = EmailAddress.objects.filter(
        user=email_address.user).exclude(primary=True).delete()