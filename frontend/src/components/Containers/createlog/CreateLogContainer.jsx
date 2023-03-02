import { CreateLog } from "../../../pages"
import { useMutation } from "react-query"
import { createLogRequest } from "../../../api"

export const CreateLogContainer = () => {
  const createLog = useMutation(createLogRequest)

  return (
    <>
      <CreateLog createLog={createLog} />
    </>
  )
}
