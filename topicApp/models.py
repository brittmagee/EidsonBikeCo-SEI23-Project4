from django.db import models

# Create your models here.

#Note: models. --> python class inheritance 
class Testimonial(models.Model):
    name = models.CharField(max_length = 40)
    occupation = models.CharField(max_length = 40)
    yearPurchased = models.IntegerField(default=2019, null=True)
    quote = models.CharField(max_length=300)
    # image = models.ImageField(upload_to='testimonials', default= "https://s3.amazonaws.com/cloud.scoutmob.com/hp/products/11113/product/Edison_Shoot_213-0157.jpg?1518453440")
    image = models.CharField(max_length = 500, default= "https://s3.amazonaws.com/cloud.scoutmob.com/hp/products/11113/product/Edison_Shoot_213-0157.jpg?1518453440")



class Bike(models.Model):
    name = models.CharField(max_length = 25)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    weight = models.IntegerField(default=46 , null=True)
    sub = models.CharField(max_length= 100, default="Born in ATL")
    thePair = 'Black + White'
    theBlack = 'Black'
    theWhite = 'White'
    colorSelection = [
        (thePair, 'The Pair'),
        (theBlack, 'Black'),
        (theWhite, 'White'),
    ]
    color = models.CharField(
        max_length=2,
        choices=colorSelection,
        default=theBlack,
    )
    features = models.CharField(max_length=300)
    warranty = models.CharField(max_length= 100)
    goFarther = models.CharField(max_length= 100)
    goFaster = models.CharField(max_length= 100)
    image = models.CharField(max_length = 500, default="https://1ycbx02rgnsa1i87hd1i7v1r-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/EdisonBicycles_byGL-91-e1503524971119.jpg")

# Django field data link: https://docs.djangoproject.com/en/2.2/ref/models/fields/

# class Cart(models.Model):
#     isComplete = models.BooleanField() 

# association table between the bikes and carts 
class Order(models.Model):
    # cart = models.ForeignKey(Cart, default=1, on_delete=models.PROTECT, related_name='carts')
    email = models.EmailField(default="Email...",max_length = 50)
    bike = models.ForeignKey(Bike, default=1, on_delete=models.PROTECT, related_name='bikes')
    # quantity = models.IntegerField(null=True)




