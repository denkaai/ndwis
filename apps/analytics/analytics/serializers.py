from rest_framework import serializers
from .models import PaymentAnalytics

class PaymentAnalyticsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentAnalytics
        fields = '__all__'
