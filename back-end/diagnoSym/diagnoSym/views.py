from rest_framework.decorators import api_view
from rest_framework import status
from django.http import JsonResponse
from .serializers import UserSerializers
from .models import User, Symptoms, Prediction
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
        print(data)
        user_email = data.get('user')
        if user_email:
            user = User.objects.filter(email=user_email).first()
            if user is not None:
                user_id = user.id
                symptoms_to_create = []
                for key, value in data.items():
                    if key != 'user':  
                        modified_key = key.replace('_radio', '')
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
        user_email = 'bsindhuja@vt.edu'
        if user_email:
            user = User.objects.filter(email=user_email).first()
            if user is not None:
                user_id = user.id
            if user_id is not None:
                print(f"User ID: {user_id}")
                predictions = Prediction.objects.filter(user_id = user_id)
                print(str(predictions.query))
                print(predictions)
                if predictions.exists():
                    data = []
                    for prediction in predictions:
                        data.append({
                            'user_id': user.id,
                            'disease': prediction.disease,
                            'prediction': prediction.score,
                        })
                    return JsonResponse(data, safe=False)  
                else:
                    return JsonResponse({'error': 'Predictions not found for the user'}, status=404)
            else:
                return JsonResponse({'error': 'User not found'}, status=404)
        else:
            return JsonResponse({'error': 'User email not provided'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)
