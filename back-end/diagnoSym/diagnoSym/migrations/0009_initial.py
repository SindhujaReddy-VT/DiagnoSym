# Generated by Django 4.2.6 on 2023-11-05 00:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("diagnoSym", "0008_remove_symptoms_user_delete_prediction_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="User",
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
                ("first_name", models.CharField(max_length=60)),
                ("last_name", models.CharField(max_length=60)),
                ("email", models.EmailField(max_length=60)),
                ("password", models.CharField(max_length=60)),
            ],
        ),
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
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="diagnoSym.user"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Prediction",
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
                ("disease", models.CharField(max_length=150)),
                ("score", models.FloatField(default=0)),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="diagnoSym.user"
                    ),
                ),
            ],
        ),
    ]
