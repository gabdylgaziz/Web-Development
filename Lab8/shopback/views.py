from django.shortcuts import render
from shopback.models import Product, Category
from django.http import JsonResponse

# Create your views here.
def product_list(request):
    products = Product.objects.all()
    data = {'products':list(products.values())}
    return JsonResponse(data)

def product(request, id):
    product = Product.objects.get(id = id)
    data = {
        'product': {
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category_id': product.category_id
        }
    }
    return JsonResponse(data)

