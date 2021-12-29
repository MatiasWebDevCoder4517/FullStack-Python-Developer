from django.shortcuts import render, redirect
from .models import *


def index(request):
    context = {
        'items': Item.objects.all()
    }
    return render(request, "store/index.html", context)


def buy(request):
    request.session['quantity'] = request.POST['quantity']
    request.session['id'] = request.POST['id']
    return redirect("/store/checkout")


def checkout(request):
    Item.objects.get(id=request.session['id'])

    return render(request, "store/checkout.html")


''' from django.shortcuts import render
from .models import Order, Product


def index(request):
    context = {
        "all_products": Product.objects.all()
    }
    return render(request, "store/index.html", context)


def checkout(request):
    quantity_from_form = int(request.POST["quantity"])
    price_from_form = float(request.POST["price"])
    total_charge = quantity_from_form * price_from_form
    print("Charging credit card...")
    Order.objects.create(quantity_ordered=quantity_from_form,
                         total_price=total_charge)
    return render(request, "store/checkout.html") '''
