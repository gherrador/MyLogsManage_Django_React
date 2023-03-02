from django.test import TestCase
from django.urls import reverse
from ..models import Logs

class TestSetUp(TestCase):
    def setUp(self):

        self.log_data = Logs.objects.create(
            message="test api",
            severity="10 - DEBUG",
            source="NGINX"
        )

        self.log_data.save()

        self.get_logs = reverse("get_list")        
                
        self.get_logs_by_id = reverse("get_log_by_id", args=[self.log_data.id])
        
        self.create_log = reverse("create_log")
        
        self.update_log_by_id = reverse("update_log",args=[self.log_data.id])

        self.delete_log = reverse('delete_log', args=[self.log_data.id])

        self.get_data_by_params = reverse('log_by_param')
        
        self.get_aggregate_data = reverse('get_aggregate_data')


        return super().setUp()
    
    def tearDown(self):
        return super().tearDown()
    
