from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db.models import Count
from .models import Logs
from .serializers import LogsSerializers
from rest_framework import status



@api_view(["GET"])
def getLogs(request):
    try:
        logs = Logs.objects.all()
        serializer = LogsSerializers(logs, many=True)
        return Response(serializer.data)
    except:
        return Response("Logs not found", status=status.HTTP_204_NO_CONTENT)


@api_view(["GET"])
def get_by_id(request, pk):
    try:
        log = Logs.objects.get(id=pk)
        serializer = LogsSerializers(log, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except:
        return Response("No Log Found", status=status.HTTP_404_NOT_FOUND)




@api_view(["POST"])
def createLogs(request):
    data = request.data
    try:
        log = Logs.objects.create(
            message=data["message"],
            severity=data["severity"],
            source=data["source"],
            )
        serializer = LogsSerializers(log, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except:
        return Response("invalid data", status=status.HTTP_400_BAD_REQUEST)


@api_view(["PUT"])
def modifiedLogs(request, pk):
    try:
        log = Logs.objects.get(id=pk)
        serializer = LogsSerializers(instance=log, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    except:
        return Response("Bad request", status=status.HTTP_400_BAD_REQUEST)


@api_view(["DELETE"])
def deleteLog(request, pk):
    try:
        log = Logs.objects.get(id=pk)
        log.delete()
        return Response("the log was deleted", status=status.HTTP_200_OK)

    except:
        return Response("Log not found", status=status.HTTP_404_NOT_FOUND)




# View to manage Query Raw Data - This is used to filter the data.
@api_view(["POST"])
def get_by_parameter(request):    
    # Get parameters from request
    data = request.data 
    
    # Valid data or None value
    severity = data['severity'] if ('severity' in data and data['severity'] != "---" and data['severity'] != "") else None
    source = data['source'] if ('source' in data and data['source'] != "---" and data['source'] != "") else None
    start = data['start'] if 'start' in data else None
    end = data['end'] if 'end' in data else None
    

    # filter data with the parameters
    try:
        logs = Logs.objects.raw(
            """SELECT * FROM mymanagelogs_logs WHERE (%(severity)s IS NULL OR severity=%(severity)s) AND (%(source)s IS NULL OR source=%(source)s) AND (%(start_date)s IS NULL OR timestamp >= %(start_date)s) AND (%(end_date)s IS NULL OR timestamp <= %(end_date)s)""",
            params={'severity': severity, 'source': source, 'start_date':start, 'end_date':end}
            )
        
        serializer = LogsSerializers(logs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # Exeption if something go wrong
    except:
        return Response("bad request", status=status.HTTP_400_BAD_REQUEST)



@api_view(["POST"])
def get_aggregate_data(request):
    data = request.data
    start = data['start']
    end = data['end']
    severity = data['severity'] if ('severity' in data and data['severity'] != "---" and data['severity'] != "") else None
    source = data['source'] if ('source' in data and data['source'] != "---" and data['source'] != "") else None

    params = { 'severity' : severity, 'source' : source}
    
    arguments = {}
    for k, v in params.items():
        if v:
            arguments[k] = v

    try:                
        aggregateBySeverity = Logs.objects.filter(timestamp__range=(start,end)).filter(**arguments).\
          values('severity').\
            annotate(totalLogsBySeverity=Count("severity"))
        
        aggregateBySource = Logs.objects.filter(timestamp__range=(start, end)).filter(**arguments).\
          values('source').\
            annotate(totalLogsBySource=Count("source"))
        
                
        aggregateByDate = Logs.objects.filter(timestamp__range=(start, end)).filter(**arguments).extra({'created_day':"date(timestamp)"}).\
          values('created_day').\
            annotate(totalLogsByDate=Count("timestamp"))
        
        QtyLogsBetweenDate = Logs.objects.filter(timestamp__range=(start, end)).filter(**arguments).aggregate(Count('timestamp'))

        
        logs = [list(aggregateBySeverity), list(aggregateBySource), list(aggregateByDate), QtyLogsBetweenDate]

        return Response(logs, status=status.HTTP_200_OK)
    
    except:
        return Response("bad request", status=status.HTTP_400_BAD_REQUEST)




