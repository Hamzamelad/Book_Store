# Generated by Django 4.1.7 on 2023-03-18 11:13

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("books", "0003_alter_book_title"),
    ]

    operations = [
        migrations.AlterField(
            model_name="book",
            name="pup_date",
            field=models.DateTimeField(),
        ),
    ]
