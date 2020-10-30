from rest_framework import routers
from .api import TablViewSet


router = routers.DefaultRouter()
router.register('api/tabl', TablViewSet, 'tabl')


urlpatterns = routers.urls