from rest_framework import serializers
from .models import Tabl


class TablSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tabl
        field = '__all__'

