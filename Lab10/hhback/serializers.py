from rest_framework import serializers
from .models import Company, Vacancy


class CompanySerialize(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=40)
    description = serializers.CharField(default="")
    city = serializers.CharField(max_length=20)
    address = serializers.CharField()

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('name', 'description', 'city', 'address')
        
class VacancySerialize(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=40)
    description = serializers.CharField(default="")
    salary = serializers.FloatField()
    company = CompanySerialize()

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('name', 'description', 'salary', 'company')