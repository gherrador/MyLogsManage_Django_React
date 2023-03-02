import { LogDetail } from "../../../pages"
import { useParams } from "react-router-dom"
import { useQuery, useMutation } from "react-query"
import { QueryKeys } from '../../../Keys'
import { getLogsById, deleteLogRequest, updateLogRequest } from "../../../api"
import { useNavigate } from "react-router-dom"


export const LogDetailContainer = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const { data, isLoading, refetch } = useQuery({ queryKey: [QueryKeys.logs, id], queryFn: () => getLogsById(id) })

  const deleteLog = useMutation(deleteLogRequest, {
    onSuccess: () => {
      refetch()
      navigate('/dashboard/table');
    }
  })

  const updateLog = useMutation(updateLogRequest, {
    onSuccess: () => {
      refetch()
      navigate('/dashboard/table')
    }
  }) 

  
  return (
    <>
      {isLoading ? <h1>Loading...</h1> : <LogDetail data={[data]} deleteLog={deleteLog} updateLog={updateLog} />}
    </>
  )
}
