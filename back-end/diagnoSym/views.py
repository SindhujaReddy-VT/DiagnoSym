from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import make_password
from .serializers import UserSerializers
from .models import User

@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        serializer = UserSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print(status.HTTP_201_CREATED)
            return JsonResponse({"status": "Registration Successful"}, status=status.HTTP_201_CREATED)
        return JsonResponse({"status": "Registration Failed"}, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        email = request.data.get('email')
        password = request.data.get('password')
        print("aaa")
        result = User.objects.values('id', 'email','password')
        print("bbb")
        print(result)
        for item in result:
            i = item['id']
            e = item['email']
            p = item['password']
            print(f"Received login request for email: {e}")
            print(f"Received login request for password: {p}")
            if(e == email and p == password):
                return JsonResponse({"message": "Login successful", "user_id": i, "status": "ok"}, status=status.HTTP_200_OK)
        
        return JsonResponse({"message": "Login failed. Invalid credentials.", "status": "fail"}, status=status.HTTP_401_UNAUTHORIZED)
