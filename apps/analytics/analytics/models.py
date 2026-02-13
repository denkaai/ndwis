from django.db import models

class UserAnalytics(models.Model):
    user_id = models.UUIDField(primary_key=True)
    email = models.EmailField()
    created_at = models.DateTimeField()
    last_login = models.DateTimeField(null=True)

    class Meta:
        managed = False
        db_table = 'User'

class OrganizationAnalytics(models.Model):
    org_id = models.UUIDField(primary_key=True)
    name = models.CharField(max_length=255)
    owner_id = models.UUIDField()
    created_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'Organization'

class PaymentAnalytics(models.Model):
    payment_id = models.UUIDField(primary_key=True)
    organization_id = models.UUIDField()
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    currency = models.CharField(max_length=10)
    status = models.CharField(max_length=50)
    created_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'Payment'
