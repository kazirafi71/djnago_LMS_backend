from django.db import models

# Create your models here.


class Teacher(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    qualification = models.CharField(max_length=200)
    mobile_no = models.CharField(max_length=20)
    skills = models.TextField()


class CourseCategory(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()

    class Meta:
        verbose_name_plural = "Course Categories"

    def __str__(self):
        return self.title


class Course(models.Model):
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    description = models.TextField()
    courseImg = models.ImageField(upload_to="course_img", null=True)
    technology = models.TextField(null=True)

    def __str__(self):
        return self.title


class Student(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    qualification = models.CharField(max_length=200)
    mobile_no = models.CharField(max_length=20)
    address = models.TextField()
    interested_categories = models.TextField()


class Chapter(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    description = models.TextField()
    video = models.FileField(upload_to="chapter_video/", null=True)
    remarks = models.TextField()

    class Meta:
        verbose_name_plural = "Chapter"

    def __str__(self):
        return self.title
