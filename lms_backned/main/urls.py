from django.urls import path
from .views import ChapterList, TeacherList, TeacherDetail, teacher_login, CourseCategoryList, CourseCreateList, TeacherCourseList


urlpatterns = [
    path('teachers/', TeacherList.as_view()),
    path('teachers/<int:pk>/', TeacherDetail.as_view()),
    path('teacher_login/', teacher_login),
    path('course-category/', CourseCategoryList.as_view()),
    path('course/', CourseCreateList.as_view()),
    path('teacher-course/<int:teacher_id>/', TeacherCourseList.as_view()),
    path('chapter/', ChapterList.as_view()),
]
