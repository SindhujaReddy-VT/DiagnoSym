from rest_framework.decorators import api_view
from rest_framework import status
from django.http import JsonResponse
from .serializers import UserSerializers
from .models import User
import json


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
        result = User.objects.filter(email=email).first()
        if result:
            return JsonResponse({"message": "Login successful", "status": "ok"},
                                status=status.HTTP_200_OK)
        else:
            return JsonResponse({"message": "Login failed. Invalid credentials.", "status": "fail"},
                                status=status.HTTP_401_UNAUTHORIZED)
        
@api_view(['POST'])
def process_questionnaire(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        # Process and save the JSON data as needed
        print(data)
        return JsonResponse({'message': 'Data received and processed successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)