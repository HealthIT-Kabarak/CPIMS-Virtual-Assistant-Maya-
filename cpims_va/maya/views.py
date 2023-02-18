from django.shortcuts import render
# Create your views here.
from django.http import HttpResponse

def mayaView(request):
    return HttpResponse("<h1>Welcome to Maya, A CPIMS Virtual Assistsnt.</h1>")