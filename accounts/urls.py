from django.urls import path, include, re_path


from .views import CustomPasswordSetView, AuthorDetailView, GoogleLoginView



urlpatterns = [
    path('password/set/', CustomPasswordSetView.as_view(), name='set_password'),
    path('author/<int:pk>/', AuthorDetailView.as_view(), name='author_details'),
    path('dj-rest-auth/google/', GoogleLoginView.as_view(), name='dj_google_login'),
    # re_path(r"^", include('django.contrib.auth.urls'))

]


# https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://127.0.0.1:8000/accounts/google/login/callback/&prompt=consent&response_type=token&client_id=236835452498-0m40msc08eo4spulp87q83mblt6ic3mf.apps.googleusercontent.com&scope=profile

{
    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3OTQxMjQ2OSwiaWF0IjoxNjc5MzI2MDY5LCJqdGkiOiJiNjgyYTRlNGU0MTU0NzFhODQzY2VmNzNlZDYwYWMxMSIsInVzZXJfaWQiOjV9.tkJZmXrwyXXDax_TeART9UW1906zNeYWpGOoYo0861A",
    "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc5MzI2MzY5LCJpYXQiOjE2NzkzMjYwNjksImp0aSI6ImY1ODQwM2MwMmQ0ZjQ0MDhhMWI1YTlkMzExMmFjN2Q0IiwidXNlcl9pZCI6NX0.baPo5PZpY6f5NHlT239UTflB9XHjJvcjb4nZQKEwNnI"
}