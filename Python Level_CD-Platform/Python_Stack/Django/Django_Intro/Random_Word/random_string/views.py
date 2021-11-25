from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.utils.crypto import get_random_string

# Create your views here.


def index(request, *args, **kwargs):
    print(args, kwargs)
    return render(request, "index.html")


def generate(request, *args, **kwargs):
    print(args, kwargs)
    if 'count' not in request.session:
        request.session['count'] = 1
    else:
        request.session['count'] += 1
    context = {
        "word": get_random_string(length=14),
        "count": request.session['count']
    }
    return render(request, "index.html", context)


def reset(request):
    request.session.clear()
    return redirect('/')
