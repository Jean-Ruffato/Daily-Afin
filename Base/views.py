from django.shortcuts import render


def inicio(request, path=''):
    """
    The home page. This renders the container for the single page application
    """
    return render(request, 'Base/index.html')
