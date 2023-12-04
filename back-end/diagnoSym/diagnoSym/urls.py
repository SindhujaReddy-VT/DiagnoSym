"""
URL configuration for diagnoSym project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from diagnoSym import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("sign-up/", views.register),
    path("sign-in/", views.login),
    path('api/process_questionnaire/', views.process_questionnaire),
    path('prediction/<str:username>/', views.disease_prediction, name='disease_prediction'),
    path('user/details/<str:username>/', views.get_user_details, name='user_edit'),
    path('user/update/<str:username>/', views.update_user_details, name='update_user_details'),
    path('feedback/user/<str:username>/', views.get_reviews, name='get_reviews'),
    path('feedback/post/<str:username>/', views.post_review, name='post_review'),
    path('api/past_records/<str:username>/', views.get_past_records, name='get_past_records'),

]