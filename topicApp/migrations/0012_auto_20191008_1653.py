# Generated by Django 2.1.11 on 2019-10-08 16:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('topicApp', '0011_auto_20191007_2128'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='cart',
        ),
        migrations.RemoveField(
            model_name='order',
            name='quantity',
        ),
        migrations.AddField(
            model_name='order',
            name='email',
            field=models.EmailField(default='Email...', max_length=50),
        ),
        migrations.DeleteModel(
            name='Cart',
        ),
    ]
