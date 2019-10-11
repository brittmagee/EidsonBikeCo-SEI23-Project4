from rest_framework import serializers    
# from .models import Testimonial, Bike, Cart, Order 
from .models import Testimonial, Bike, Order

class TestimonialSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Testimonial    
        fields = ['id', 'name', 'occupation', 'yearPurchased', 'quote', 'image'] #pieces of serializer to convert to and from JSON data
            #spelling MUST match what is in on models
    
class BikeSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Bike
        fields = ['id', 'name', 'price', 'weight', 'sub', 'color','features', 'warranty', 'goFarther', 'goFaster', 'image']

# class OrderItemSerializer(serializers.ModelSerializer):  
#     class Meta:     
#         model = OrderItem
#         fields = ['id','order', 'bike']

class OrderSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Order
        fields = ['email', 'bike']
        # fields = ['id','email', 'isComplete']