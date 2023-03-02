import { Box } from '@mui/material'
import { Header, TableComponent } from '../../components'


export const Table = ({ Logs, LogsFiltered }) => {
    return (
        <Box>
            <Header title="LOGS TABLE" subtitle="Raw information of Logs" />
            <TableComponent Logs={Logs} LogsFiltered={LogsFiltered}  />
        </Box>
    )
}











