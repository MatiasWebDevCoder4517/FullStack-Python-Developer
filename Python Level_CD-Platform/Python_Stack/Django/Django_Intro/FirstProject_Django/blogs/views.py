from django.http import HttpResponse
from django.shortcuts import render, redirect

# Create your views here.


def root(request, *args, **kwargs):  # *args, **kwargs
    print(args, kwargs)
    print(request.user)
    return HttpResponse("<h1>/blogs</h1>")

    """ return render(request, "blog.html", {}) """


def index(request, *args, **kwargs):  # *args, **kwargs
    print(args, kwargs)
    print(request.user)
    return HttpResponse("<h1>placeholder para luego mostrar una lista de todos los blogs</h1>")

    """ return render(request, "index.html", {}) """


def new(request, *args, **kwargs):  # *args, **kwargs
    print(args, kwargs)
    print(request.user)
    return HttpResponse("<h1>(WITH NEW METHOD) placeholder para luego mostrar una lista de todos los blogs</h1>")

    """ return render(request, "index.html", {}) """


def create(request, *args, **kwargs):  # *args, **kwargs
    print(args, kwargs)
    print(request.user)
    return HttpResponse("<h1>(WITH CREATE METHOD)/blogs</h1>")

    """ return render(request, "index.html", {}) """


def show(request, number, *args, **kwargs):  # *args, **kwargs
    print(args, kwargs)
    print(request.user)
    return HttpResponse("<h1>EXECUTE ORDER  {}!!! </h1>".format(number))

    '''return render(request, "index.html", {})'''


def edit(request, number, *args, **kwargs):  # *args, **kwargs
    print(args, kwargs)
    print(request.user)
    """ return redirect("/blogs/<int:number>/edit") """
    return HttpResponse("<h1>EXECUTE ORDER  {}!!! </h1>".format(number))
    """ return render(request, "index.html", {}) """


def destroy(request, *args, **kwargs):  # *args, **kwargs
    print(args, kwargs)
    print(request.user)
    return redirect("/blogs")

    """ return HttpResponse("<h1>(WITH DESTROY METHOD)/blogs</h1>") """
    """ return render(request, "index.html", {}) """
