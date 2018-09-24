from rest_framework import serializers
from .models import Projetos, Atividades, Perfil, Apontamento


class PerfilSerializer(serializers.ModelSerializer):
    """
        Classe para serialização dos dados do modelo Perfil e servir uma Api com esses dados
    """

    class Meta:
        model = Perfil
        depth = 1
        fields = ['Departamento', 'Matricula', 'Nome', 'Usuario']


class ProjetosSerializer (serializers.ModelSerializer):
    """
        Classe para serialização de dados do modelo Projeto e servir uma Api com esses dados
    """

    class Meta:
        model = Projetos
        depth = 1
        fields = ['ID', 'Projeto', 'Responsavel', 'Integrantes',
                  'Prazo', 'Horas', 'Valor', 'Status', 'Descricao']


class ApontamentosSerializer (serializers.ModelSerializer):
    """
        Classe para serialização de dados do modelo Projeto e servir uma Api com esses dados
    """

    class Meta:
        model = Apontamento
        depth = 1
        fields = ('ID', 'nome', 'matricula', 'inicio',
                  'fim', 'duracao', 'departamento', 'classificacao', 'processo', 'detalhamento', 'observacao')

    extra_kwargs = {
        'nome': {'required': False},
        'matricula': {'required': False},
        'inicio': {'required': False},
        'fim': {'required': False},
        'duracao': {'required': False},
        'departamento': {'required': False},
        'classificacao': {'required': False},
        'processo': {'required': False},
        'detalhamento': {'required': False},
        'observacao': {'required': False},
    }


class AtividadesSerializer (serializers.ModelSerializer):
    """
        Classe para serialização de dados do modelo Atividades e servir uma Api com esses dados
    """
    class Meta:
        model = Atividades
        depth = 1
        fields = ['ID', 'Nome', 'Inicio', 'Fim', 'Projeto', 'Atividade',
                  'Prazo', 'Status', 'Prioridade', 'Descricao', 'Horas']
