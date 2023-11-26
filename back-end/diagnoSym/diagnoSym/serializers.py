from rest_framework import serializers
from .models import User, Review


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    author_first_name = serializers.ReadOnlyField(source='author.first_name')
    author_last_name = serializers.ReadOnlyField(source='author.last_name')

    class Meta:
        model = Review
        fields = ['author_first_name', 'author_last_name', 'content']
