from .models import Tabl
from rest_framework import viewsets, permissions
from .serializers import TablSerializer


class TablViewSet(viewsets.ModelViewSet):
    queryset = Tabl.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TablSerializer
