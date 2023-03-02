from .test_setup import TestSetUp
from rest_framework import status


class TestViews(TestSetUp):    
    def test_can_get_logs(self):
        res = self.client.get(self.get_logs)
        self.assertEqual(res.status_code, status.HTTP_200_OK )
    
    def test_get_log_by_id(self):
        res = self.client.get(self.get_logs_by_id)      
        self.assertEqual(res.status_code, status.HTTP_200_OK)

    def test_can_create_a_new_log(self):
        new_log = {"message":"test api", "severity":"10 - DEBUG","source":"NGINX"}        
        res = self.client.post(self.create_log, new_log)        
        self.assertEqual(res.status_code, status.HTTP_200_OK)

    def test_can_create_a_new_log(self):
        new_log = {"message":"test api", "severity":"10 - DEBUG","source":"NGINX"}        
        res = self.client.post(self.create_log, new_log)        
        self.assertEqual(res.status_code, status.HTTP_200_OK)

    def test_can_update_data(self):        
        res = self.client.put(self.update_log_by_id)
        self.assertEqual(res.status_code, status.HTTP_200_OK)

    def test_can_delete_data(self):        
        res = self.client.delete(self.delete_log)
        self.assertEqual(res.status_code, status.HTTP_200_OK)
    
    def test_can_filter_by_params(self):
        param_to_filter={'severity':'10 - DEBUG'}
        res = self.client.post(self.get_data_by_params, param_to_filter)        
        self.assertEqual(res.status_code, status.HTTP_200_OK)

    def test_aggregate_data(self):        
        param_to_filter={'start':'2022-11-23','end':'2022-12-23','severity':'10 - DEBUG'}
        res = self.client.post(self.get_aggregate_data, param_to_filter)        
        self.assertEqual(res.status_code, status.HTTP_200_OK)
