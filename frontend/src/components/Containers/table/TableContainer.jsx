import { QueryKeys } from '../../../Keys'
import { useQuery } from "react-query"
import { getAllLogs, getLogsFiltered } from '../../../api'
import { Table } from '../../../pages'

export const TableContainer = () => {

    const getLogs = useQuery(QueryKeys.logs, getAllLogs)

    const filterLogs = async(values) => {
      const data = await getLogsFiltered(values)
      return data
    }
 
  return (
        <>
        {getLogs.isLoading ? <h1>Loading...</h1> : <Table Logs={getLogs.data} LogsFiltered={filterLogs} />}
        
        </>

  )
}

