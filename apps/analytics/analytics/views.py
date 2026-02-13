from rest_framework.views import APIView
from rest_framework.response import Response
from .models import PaymentAnalytics
from .serializers import PaymentAnalyticsSerializer

class PaymentAnalyticsView(APIView):
    def get(self, request):
        payments = PaymentAnalytics.objects.all()
        serializer = PaymentAnalyticsSerializer(payments, many=True)
        return Response(serializer.data)
