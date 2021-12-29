from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('store/buy', views.buy),
    path('store/checkout', views.checkout)
]


''' from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('checkout/', views.checkout)
    ## path('store', views.index), 
] '''
