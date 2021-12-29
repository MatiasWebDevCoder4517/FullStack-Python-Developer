from django.db import models

# Create your models here.


class CourseManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        # agregue claves y valores al diccionario de errores para cada campo no válido
        if len(postData['name']) < 1:
            errors["name"] = "Course name should be at least 2 or more characters"
        if len(postData['desc']) < 15:
            errors["desc"] = "Course Description should be at least 5 or more characters"
        return errors


class DescriptionManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}

        ## AGREGAR VALIDACION PARA DETERMINAR SI UN ID EXISTE EN LA BDD O NO ##
        ###############################

        if len(postData['comments']) < 15:
            errors["comments"] = "Comment section should be at least 40 or more characters"
        return errors


class Course(models.Model):
    name = models.CharField(max_length=255)
    desc = models.TextField(default='Type the Course Description Here')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = CourseManager()

    def __str__(self):
        return "{} of the Course".format(self.name)


class Description(models.Model):
    course_desc = models.OneToOneField(
        Course, on_delete=models.CASCADE, primary_key=True)
    comments = models.TextField(default='Type the Course Comments Here')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = DescriptionManager()

    def __str__(self):
        return "The Description: {}".format(self.course_desc)
