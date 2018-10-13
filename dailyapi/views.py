# -*- coding: utf-8 -*-
from django.http import JsonResponse, response
from rest_framework.utils import json
from rest_framework_jsonp.renderers import JSONPRenderer
from dailyapi.models import Apontamento, Perfil
from .serializer import ApontamentosSerializer, PerfilSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


# View para apresentar os dados em uma página da Api
class ApontamentosListView(APIView):
    # renderer_classes = (JSONPRenderer,)
    serializer_class = ApontamentosSerializer

    def get(self, request, format=None):
        serializer = self.serializer_class(Apontamento.objects.all(), many=True)
        return Response(serializer.data)

    def post(self, request, format=None, partial=True):
        renderer_classes = (JSONPRenderer,)
        serializer = self.serializer_class(data=request.data, partial=True)
        serializer.is_valid()
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({"message": "409 Forbidden"}, status=status.HTTP_409_CONFLICT)

    def delete(self, request, pk, format=None):
        serializer = self.serializer_class(Apontamento.objects.get(pk=pk).delete())
        serializer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, format=None):
        serializer = self.serializer_class(data=request.data, partial=True)
        serializer.is_valid()
        serializer.update(instance='nome', validated_data=serializer)
        return JsonResponse(json.loads(response))


class ApontamentosIDView(APIView):
    serializer_class = ApontamentosSerializer

    def get(self, request, pk, format=None):
        serializer = self.serializer_class(Apontamento.objects.get(pk=pk))
        return Response(serializer.data)

    def post(self, request, pk, format=None):
        serializer = self.serializer_class(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({"message": "403 Forbidden"}, status=status.HTTP_409_CONFLICT)

    def delete(self, request, pk, format=None):
        serializer = self.serializer_class(Apontamento.objects.get(pk=pk).delete())
        serializer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk, format=None):
        serializer = self.serializer_class(data=request.data, partial=True)
        serializer.is_valid()
        print(serializer)
        serializer.save()

        # Deleta o registro anterior
        serializer_del = self.serializer_class(Apontamento.objects.get(pk=pk).delete())
        serializer_del.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# View para apresentar os dados em uma página da Api
class PerfilListView(APIView):
    serializer_class = PerfilSerializer

    def get(self, request, usuario, format=None):
        serializer = self.serializer_class(Perfil.objects.get(Usuario=usuario))
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({"message": "403 Forbidden"}, status=status.HTTP_409_CONFLICT)


class PerfilIDView(APIView):
    serializer_class = PerfilSerializer

    def get(self, request, pk, format=None):
        serializer = self.serializer_class(Perfil.objects.get(pk=pk))
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({"message": "403 Forbidden"}, status=status.HTTP_409_CONFLICT)
