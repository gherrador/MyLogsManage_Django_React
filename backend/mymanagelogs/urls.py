from django.urls import path
from . import views

urlpatterns = [
    path('get/', views.getLogs, name='get_list'),
    path('post/', views.createLogs, name='create_log'),
    path('put/<int:pk>/', views.modifiedLogs, name='update_log'),
    path('detail/<int:pk>/', views.get_by_id, name='get_log_by_id'),
    path('delete/<int:pk>/', views.deleteLog, name='delete_log'),
    path('logsbyparameter/', views.get_by_parameter, name='log_by_param'),
    path('get_aggregate_data/', views.get_aggregate_data, name='get_aggregate_data')
]