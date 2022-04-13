from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from .serializers import TeacherSerializer, CourseCategorySerializer, CourseSerializer, ChapterSerializer
from .models import Teacher, CourseCategory, Course, Chapter
from rest_framework.response import Response
from rest_framework import permissions
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse


# Create your views here.


class TeacherList(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes = [permissions.IsAuthenticated]


class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes = [permissions.IsAuthenticated]


@csrf_exempt
def teacher_login(request):
    try:
        email = request.POST["email"]
        password = request.POST["password"]
        teacherInfo = Teacher.objects.get(
            email=email, password=password)
        print(teacherInfo)

        if teacherInfo:
            return JsonResponse({"success": "Login success", "teacherInfo": teacherInfo.id})

    except Exception as e:
        return JsonResponse({'error': 'Invalid credentials'})


class CourseCategoryList(generics.ListCreateAPIView):
    queryset = CourseCategory.objects.all()
    serializer_class = CourseCategorySerializer


class CourseCreateList(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class TeacherCourseList(generics.ListAPIView):
    serializer_class = CourseSerializer

    def get_queryset(self):
        teacher_id = self.kwargs["teacher_id"]
        return Course.objects.filter(teacher=teacher_id)


class ChapterList(generics.ListCreateAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer
