from django.http import HttpResponseRedirect
from allauth.account.views import PasswordSetView
from django.views.generic import DetailView
from django.contrib.auth import get_user_model
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.views.decorators.debug import sensitive_post_parameters
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter


sensitive_post_parameters_m = method_decorator(
    sensitive_post_parameters("oldpassword", "password", "password1", "password2")
)

class AuthorDetailView(DetailView):
    model = get_user_model()
    template_name = 'author_profile.html'
    context_object_name = 'author'


# Create your views here.
class CustomPasswordSetView(PasswordSetView):

    @sensitive_post_parameters_m
    def dispatch(self, request, *args, **kwargs):
        if self.request.user.has_usable_password():
            return HttpResponseRedirect(reverse("home"))
        return super(PasswordSetView, self).dispatch(request, *args, **kwargs)
    


class GoogleLoginView(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter