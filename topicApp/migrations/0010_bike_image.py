# Generated by Django 2.1.11 on 2019-10-07 21:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('topicApp', '0009_auto_20191007_2121'),
    ]

    operations = [
        migrations.AddField(
            model_name='bike',
            name='image',
            field=models.CharField(default='https://static.wixstatic.com/media/05d438_40af007f61474541a6e773efad2199da~mv2_d_1920_1280_s_2.jpg/v1/fill/w_996,h_662,al_c,q_85,usm_0.66_1.00_0.01/05d438_40af007f61474541a6e773efad2199da~mv2_d_1920_1280_s_2.webp', max_length=500),
        ),
    ]
