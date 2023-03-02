from django.urls import reverse, resolve
from ..views import getLogs, get_by_parameter, get_aggregate_data, get_by_id, modifiedLogs, deleteLog, createLogs
from .test_setup import TestSetUp

class TestUrls(TestSetUp):

    def test_getList_url_is_resolve(self):
        url = self.get_logs
        self.assertEqual(resolve(url).func, getLogs)
    
    def test_getLog_by_id_url_is_resolve(self):
        url = self.get_logs_by_id
        self.assertEqual(resolve(url).func, get_by_id)
    
    def test_get_by_parameter_url_is_resolve(self):
        url = self.get_data_by_params
        self.assertEqual(resolve(url).func, get_by_parameter)
    
    def test_get_aggregate_data_url_is_resolve(self):
        url = self.get_aggregate_data
        self.assertEqual(resolve(url).func, get_aggregate_data)

    def test_delete_log_url_is_resolve(self):
        url = self.delete_log
        self.assertEqual(resolve(url).func, deleteLog)

    def test_get_by_parameter_url_is_resolve(self):
        url = self.update_log_by_id
        self.assertEqual(resolve(url).func, modifiedLogs)
    
    def test_get_by_parameter_url_is_resolve(self):
        url = self.create_log
        self.assertEqual(resolve(url).func, createLogs)




    
    