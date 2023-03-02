export const columns = [
  { field: 'id'},
  { field: 'message' },
  { field: 'severity' },
  { field: 'source' },
  { headerName: 'Create At', field: 'timestamp' }
]

export const defaultColDef = {
  sortable: true,
  flex: 1,
}


export const severityOptions = ["---","10 - DEBUG", "20 - INFO", "30 - WARNING", "40 - ERROR", "50 - CRITICAL"]

export const sourceOptions = ["---","NGINX","SERVER", "DB REQUEST", "DOCKER"]