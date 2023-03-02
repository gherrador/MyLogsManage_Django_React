import { Box } from "@mui/material"
import { PieChartComponent } from "../../components/charts/PieChart"
import { Header } from '../../components'
export const PieChart = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Pie Bar - Qty Logs vs. Type of Source"/>
      <Box height="75vh">
            <PieChartComponent/>
      </Box>
    </Box>
  )
}
