import logging
from traceback import print_exc


class DBHandler(logging.Handler):
    def emit(self, record):
        from .models import Logs
        from .serializers import LogsSerializers

        try:
            message = self.format(record)
            try:
                last_line = message.rsplit("\n", 1)[-1]
            except:
                last_line = None

            try:
                log = Logs.objects.create(
                    message=f"{message}",
                    severity=f"{record.levelno} - {record.levelname}",
                    source=record.pathname,
                )
                LogsSerializers(log, many=False) 
                # raise

            except:              
                print_exc()
        except:
            print_exc()
