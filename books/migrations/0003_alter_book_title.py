# Generated by Django 4.1.7 on 2023-03-16 17:24

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("books", "0002_book_cover"),
    ]

    operations = [
        migrations.AlterField(
            model_name="book",
            name="title",
            field=models.CharField(max_length=500),
        ),
    ]
