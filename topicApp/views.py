from django.shortcuts import render
from rest_framework import viewsets    
# from .serializers import TestimonialSerializer, BikeSerializer, CartSerializer, OrderSerializer   
# from .models import Testimonial, Bike, Cart, Order  
from .serializers import TestimonialSerializer, BikeSerializer, OrderSerializer 
from .models import Testimonial, Bike, Order


# add these imports for React
from django.urls import path, include, re_path
from . import views


class TestimonialViewSet(viewsets.ModelViewSet): 
    # """ are a multiline string shortcut that ignores new lines i.e replaces multi-line comments
    """    
    API endpoint that allows users to be viewed or edited.    
    """    
    queryset = Testimonial.objects.all()    #enables grab & autogenerate all information from database
    serializer_class = TestimonialSerializer #tells django how you want objects in database to be sent out to web


class BikeViewSet(viewsets.ModelViewSet): 
    """    
    API endpoint that allows users to be viewed or edited.    
    """    
    queryset = Bike.objects.all()    
    serializer_class = BikeSerializer 


class OrderViewSet(viewsets.ModelViewSet): 
    """    
    API endpoint that allows users to be viewed or edited.    
    """    
    queryset = Order.objects.all()    
    serializer_class = OrderSerializer 

# class OrderItemViewSet(viewsets.ModelViewSet): 
#     """    
#     API endpoint that allows users to be viewed or edited.    
#     """    
#     queryset = OrderItem.objects.all()    
#     serializer_class = OrderItemSerializer 