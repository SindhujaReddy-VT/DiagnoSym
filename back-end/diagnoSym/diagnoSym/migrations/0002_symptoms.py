# Generated by Django 4.2.6 on 2023-11-04 21:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("diagnoSym", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Symptoms",
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
                ("symptom", models.CharField(max_length=100)),
                ("value", models.IntegerField(default=0)),
            ],
        ),
    ]
