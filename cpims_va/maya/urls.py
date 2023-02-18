from django.urls import path
from .views import mayaView, testView

urlpatterns = [
    path('', mayaView, name='maya'),
    path('<slug>', testView, name='testing')
]
