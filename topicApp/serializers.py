from rest_framework import serializers    
from .models import Testimonial, Bike, Cart, Order 

class TestimonialSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Testimonial    
        fields = ['id', 'name', 'occupation', 'yearPurchased', 'quote', 'image'] #pieces of serializer to convert to and from JSON data
            #spelling MUST match what is in on models
    
class BikeSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Bike
        fields = ['id', 'name', 'price', 'weight', 'color', 'features', 'warranty', 'goFarther', 'goFaster', 'image']

class CartSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Cart
        fields = ['id', 'isComplete']

class OrderSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Order
        fields = ['id', 'cart', 'bike', 'quantity']