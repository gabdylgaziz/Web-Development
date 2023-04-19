from django.shortcuts import render
from .models import Company, Vacancy
from django.http import JsonResponse
from .serializers import CompanySerializer, VacancySerializer, CompanySerialize, VacancySerialize
from rest_framework import viewsets
from rest_framework.response import Response
from django.views import View

# Create your views here.

#func based views

def Companies(request):
    companies = Company.objects.all()
    data = {
        'companies' : list(companies.values())
    }
    return JsonResponse(data, status=200)

def getCompany(request, id):
    companies = Company.objects.get(id = id)
    data = {
        'company' : {
            'name' : companies.name,
            'description' : companies.description,
            'city' : companies.city,
            'address' : companies.address
        }
    }
    return JsonResponse(data, status=200)

def Vacancies(request):
    vacancies = Vacancy.objects.all()
    data = {
        'vacancies' : list(vacancies.values())
    }
    return JsonResponse(data, status=200)

def getVacancy(request, id):
    vacancy = Vacancy.objects.get(id = id)
    data = {
        'vacancy' : {
            'name' : vacancy.name,
            'description' : vacancy.description,
            'salary' : vacancy.salary,
            'company_id' : vacancy.company_id
        }
    }
    return JsonResponse(data, status=200)

def topTenSalaries(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    data = {
        'vacancies': list(vacancies.values())
    }
    return JsonResponse(data, status=200)

def getVacancyByCompany(request, id):
    vacancies = Vacancy.objects.filter(company_id=id)
    data = {
        'vacancies': list(vacancies.values())
    }
    return JsonResponse(data, status=200)

#class based views

class CompanyViewSet(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()

    def list_vacancies(self, request, pk=None):
        queryset = Vacancy.objects.all().filter(company=pk).order_by('-salary')[:10]
        serializer = VacancySerializer(queryset, many=True)
        return Response(serializer.data)


class VacancyViewSet(viewsets.ModelViewSet):
    serializer_class = VacancySerializer
    queryset = Vacancy.objects.all()

    def list_top10(self, request):
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


