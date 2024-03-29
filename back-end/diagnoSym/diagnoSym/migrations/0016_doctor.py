# Generated by Django 4.2.6 on 2023-11-26 19:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("diagnoSym", "0015_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Doctor",
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
                ("gender", models.CharField(max_length=15)),
                ("name", models.CharField(max_length=60)),
                ("specialization", models.CharField(max_length=50)),
                ("qualification", models.CharField(max_length=50)),
            ],
        ),
    ]
