# Generated by Django 4.2.6 on 2023-11-05 00:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("diagnoSym", "0007_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="symptoms",
            name="user",
        ),
        migrations.DeleteModel(
            name="Prediction",
        ),
        migrations.DeleteModel(
            name="Symptoms",
        ),
        migrations.DeleteModel(
            name="User",
        ),
    ]
