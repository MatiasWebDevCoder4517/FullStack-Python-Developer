from django.shortcuts import render, redirect, get_object_or_404, HttpResponseRedirect

from django.contrib import messages


# Create your views here.
def index(request):
    return render(request, "index.html")