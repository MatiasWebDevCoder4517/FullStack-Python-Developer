from django.shortcuts import render, redirect
from django.http import HttpResponse
from time import gmtime, strftime

# Create your views here.


def root_time(request, *args, **kwargs):  # *args, **kwargs
    print(args, kwargs)
    print(request.user)
    context = {
        "time": strftime("%d-%m-%Y %H:%M %p", gmtime())
    }
    return render(request, 'index.html', context)
