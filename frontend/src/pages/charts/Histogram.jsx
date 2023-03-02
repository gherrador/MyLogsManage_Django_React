import { Box } from "@mui/material"
import { HistogramComponent } from "../../components/"
import { Header } from '../../components'

export const HistogramChart = ({data, isDashboard}) => {
  return (
    <Box m="20px">
      <Header title="Histogram Chart" subtitle="Histogram chart - Qty Logs per day"/>
      <Box height="75vh">
            <HistogramComponent data={data} isDashboard={isDashboard}/>
      </Box>
    </Box>
  )
}
