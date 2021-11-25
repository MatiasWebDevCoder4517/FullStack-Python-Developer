from django.shortcuts import render, redirect
from django.http import HttpResponse


# Create your views here.
def index(request, *args, **kwargs):
    print(args, kwargs)
    return render(request, "index.html")


def create_user(request, *args, **kwargs):
    print(args, kwargs)
    # esta es la ruta que procesa form
    name_from_form = request.POST['name']
    email_from_form = request.POST['email']
    context = {
        "name_on_template": name_from_form,
        "email_on_template": email_from_form
    }
    return render(request, "success.html", context)


""" def success_view(request):
    # esta es la ruta de éxito
    return render(request, "success.html") """
