from rest_framework.decorators import api_view
from rest_framework import status
from django.http import JsonResponse
from .serializers import UserSerializers, ReviewSerializer 
from .models import User, Symptoms, Prediction, Review
from rest_framework.response import Response
import json

@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        serializer = UserSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({"status": "Registration Successful"}, status=status.HTTP_201_CREATED)
        else:
            errors = serializer.errors
            return JsonResponse({"status": "Registration Failed", "errors": errors}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        result = User.objects.filter(username=username).first()
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
        print(data)
        username = data.get('user')
        if username:
            user = User.objects.filter(username=username).first()
            if user is not None:
                user_id = user.id
                symptoms_to_create = []
                for key, value in data.items():
                    if key != 'user':  
                        modified_key = key.split('.)', 1)[1].rstrip('?').strip()
                        print(modified_key)
                        modified_value = 1 if value == 'Yes' else 0
                        symptom = Symptoms(user_id=user_id, symptom=modified_key, value=modified_value)
                        symptoms_to_create.append(symptom)
                Symptoms.objects.bulk_create(symptoms_to_create)
                return JsonResponse({'message': 'Data received and processed successfully'})
            else:
                return JsonResponse({'error': 'User not found for the provided email'}, status=404)
        else:
            return JsonResponse({'error': 'User email not provided'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)

@api_view(['GET'])
def disease_prediction(request):
    if request.method == 'GET':
        username = 'bsindhuja'
        if username:
            user = User.objects.filter(username=username).first()
            if user is not None:
                user_id = user.id
            if user_id is not None:
                print(f"User ID: {user_id}")
                predictions = [{'disease': 'Blood Cancer', 'prediction': 92.0}]
                print(predictions)
                if predictions:
                    return JsonResponse(predictions, safe=False)  
                else:
                    return JsonResponse({'error': 'Predictions not found for the user'}, status=404)
            else:
                return JsonResponse({'error': 'User not found'}, status=404)
        else:
            return JsonResponse({'error': 'User email not provided'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)

@api_view(['GET'])
def get_user_details(request, username):
    user_data = {} 
    if username:
        user = User.objects.filter(username=username).first()
        if user is not None:
            user_id = user.id
            if user_id is not None:
                user_data = {
                    'username': user.username,
                    'firstName': user.first_name,
                    'lastName': user.last_name,
                    'dob': user.date_of_birth,
                    'email' : user.email,
                    'gender' : user.gender
                }
    return JsonResponse(user_data)

@api_view(['POST'])
def update_user_details(request, username):
    if request.method == 'POST':
        user = User.objects.filter(username=username).first()
        if user is not None:
            data = request.data  
            user.first_name = data.get('first_name', user.first_name)
            user.last_name = data.get('last_name', user.last_name)
            user.date_of_birth = data.get('date_of_birth', user.date_of_birth)
            user.email = data.get('email', user.email)
            user.gender = data.get('gender', user.gender)
            user.save()
            return Response({'message': 'User details updated successfully'})
        else:
            return Response({'message': 'User not found'}, status=404)
             
@api_view(['GET'])
def get_reviews(request, username=None):
    reviews = Review.objects.all()
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def post_review(request, username=None):
    if request.method == 'POST':
        user = User.objects.filter(username=username).first()
        content = request.data.get('content', '')
        review = Review.objects.create(author=user, content=content)
        serializer = ReviewSerializer(review)
        return Response(serializer.data)
    