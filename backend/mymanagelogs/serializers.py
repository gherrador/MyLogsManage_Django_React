from rest_framework import serializers
from .models import Logs

class LogsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Logs
        fields = '__all__'
        read_only_fields = ('timestamp', )
