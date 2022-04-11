from django import views
from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from .serializers import TeacherSerializer
from .models import Teacher
from rest_framework.response import Response
from rest_framework import permissions


# Create your views here.


class TeacherList(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    permission_classes = [permissions.IsAuthenticated]


class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    permission_classes = [permissions.IsAuthenticated]
