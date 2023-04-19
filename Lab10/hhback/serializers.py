from rest_framework import serializers
from .models import Company, Vacancy


class CompanySerialize(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=40)
    description = serializers.CharField(default="")
    city = serializers.CharField(max_length=20)
    address = serializers.CharField()
    def create(self, validated_data):
        return Company.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.id = instance.id
        instance.name = validated_data.get("name", instance.name)
        instance.description = validated_data.get("description", instance.description)
        instance.city = validated_data.get("city", instance.city)
        instance.address = validated_data.get("address", instance.address)

        instance.save()
        return instance

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = "__all__"
        
class VacancySerialize(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=40)
    description = serializers.CharField(default="")
    salary = serializers.FloatField()
    company = CompanySerialize()



class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = "__all__"