from django.contrib import admin
from django.urls import path,include

from API.views import School_API, School_API_detail
# from rest_framework.routers import DefaultRouter

# router=DefaultRouter()

# router.register('school/',School_API,"school_api")

from rest_framework.urlpatterns import format_suffix_patterns
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('rest_framework.urls')),
    path('school/',School_API.as_view()),
    path('school/<str:id>',School_API_detail.as_view()),
]


urlpatterns = format_suffix_patterns(urlpatterns)