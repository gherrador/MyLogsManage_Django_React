import { Box } from "@mui/material"
import { BarChartComponent } from "../../components/charts/BarChart"
import { Header } from '../../components'


export const BarChart = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Bar Chart - Qty Logs vs. Type of Severity"/>
      <Box height="75vh">
             <BarChartComponent />
      </Box>
    </Box>
  )
}
