# Generated by Django 2.1.11 on 2019-10-08 19:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('topicApp', '0015_auto_20191008_1857'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bike',
            name='sub',
            field=models.CharField(default='Born in ATL', max_length=100),
        ),
    ]
