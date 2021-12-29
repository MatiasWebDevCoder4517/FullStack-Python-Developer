from django.shortcuts import render, redirect, get_object_or_404, HttpResponseRedirect
from .models import Course, Description
from django.contrib import messages

# Create your views here.

# HOME METHOD


def index(request):
    data = {
        "all_courses": Course.objects.all(),
        "all_descriptions": Description.objects.all()
    }
    return render(request, "index.html", data)


# ADD-COURSE METHOD
def add_course(request):

    # ADD_COURSE VALIDATION
    ################
    if request.method == 'GET':
        return render(request, 'add_course.html')
    else:
        errors = Course.objects.basic_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect("/")

        else:
            request.POST['name']
            request.POST['desc']
            Course.objects.create(
                name=request.POST['name'], desc=request.POST['desc'])
            messages.success(request, "Course successfully added")
            return render(request, "add_course.html")

# SELECTED COURSE METHOD


def view_course(request, course_id):
    thisCourse = Course.objects.get(id=course_id)
    data = {
        "thisCourse": thisCourse
    }
    return render(request, "comments.html", data)


# EDIT/UPDATE METHOD
def edit_course(request, course_id):

    # EDIT_COURSE VALIDATION
    ################
    thisCourse = Course.objects.get(id=course_id)
    if request.method == 'GET':
        data = {
            "thisCourse": thisCourse
        }
        return render(request, "edit_course.html", data)
    else:
        errors = Course.objects.basic_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect("/")

        elif request.method == 'POST':
            thisCourse.name = request.POST['name']
            thisCourse.desc = request.POST['desc']
            thisCourse.save()
            messages.success(request, "Course successfully updated")
            return redirect("/edit/"+str(thisCourse.id))


# DELETE METHOD 1
def delete_course(request, id):
    obj = get_object_or_404(Course, id=id)
    if request.method == "GET":
        obj.delete()
        messages.success(request, "Course successfully eliminated")
        return HttpResponseRedirect("/")
    return redirect("/")


# ADD-COMMENTS METHOD
def add_comments(request):

    # ADD_COMMENTS VALIDATION
    ################
    if request.method == 'GET':
        return render(request, 'add_comments.html')
    else:
        errors = Description.objects.basic_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect("/")

        else:
            request.POST['course_desc_id']
            request.POST['comments']
            Description.objects.create(
                course_desc_id=request.POST['course_desc_id'], comments=request.POST['comments'])
            messages.success(request, "Commentary successfully added")
            return render(request, "add_comments.html")


# EDIT/UPDATE METHOD
def edit_comments(request, description_id):

    # EDIT_COURSE VALIDATION
    ################
    thisDescription = Description.objects.get(id=description_id)
    if request.method == 'GET':
        data = {
            "thisDescription": thisDescription
        }
        return render(request, "edit_comments.html", data)
    else:
        errors = Description.objects.basic_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect("/")

        elif request.method == 'POST':
            thisDescription.course_desc_id = request.POST['course_desc_id']
            thisDescription.comments = request.POST['comments']
            thisDescription.save()
            messages.success(request, "Description successfully updated")
            return redirect("/edit/"+str(thisDescription.id))


# DELETE METHOD 2
def delete_comments(request, id):
    obj = get_object_or_404(Description, id=id)
    if request.method == "GET":
        obj.delete()
        messages.success(request, "Commentary successfully eliminated")
        return HttpResponseRedirect("/")
    return redirect("/")
