from django.shortcuts import render
from .models import Company, Vacancy
from django.http import JsonResponse

# Create your views here.

def Companies(request):
    companies = Company.objects.all()
    data = {
        'companies' : list(companies.values())
    }
    return JsonResponse(data, status=200)