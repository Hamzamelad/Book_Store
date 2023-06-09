# Generated by Django 4.1.7 on 2023-03-23 19:56

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("books", "0011_book_categories_delete_category"),
    ]

    operations = [
        migrations.CreateModel(
            name="Song",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=50)),
                ("audio", models.FileField(upload_to="audio/")),
            ],
        ),
    ]
