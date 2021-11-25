"""book_authors_projects URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from books_authors_app.views import books, add_book, view_book, add_auth_to_book, authors, add_author, view_author, add_book_to_auth


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', books),
    path('add_book', add_book),
    path('books/<int:book_id>', view_book),
    path('add_auth_to_book/<int:book_id>', add_auth_to_book),
    path('authors/', authors),
    path('add_author/', add_author),
    path('authors/<int:author_id>', view_author),
    path('add_book_to_auth/<int:author_id>', add_book_to_auth),
]
