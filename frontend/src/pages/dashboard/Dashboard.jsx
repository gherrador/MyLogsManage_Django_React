import { Box, Typography, useTheme } from "@mui/material"
import { tokens } from "../../settings/theme"
import { Header } from "../../components/Header/Header"
import { FilterPanel, HistogramComponent, StatBox, StatBoxBySeverity, StatBoxBySource } from '../../components'
import moment from 'moment'
import { BarChartComponent } from "../../components/charts/BarChart";
import { PieChartComponent } from "../../components/charts/PieChart";

export const DashboardPage = ({ params }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="-15px 0 0 2px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      <Typography mt="-20px" variant="h4" fontWeight="bold" sx={{ color: colors.grey[100] }}>
        Logs between {params.startDate ? moment(params.startDate).format("YYYY-MM-DD") : moment(params.initialValues.start).format("YYYY-MM-DD")} and {params.endDate ? moment(params.endDate).format("YYYY-MM-DD") : moment(params.initialValues.end).format("YYYY-MM-DD")}
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <FilterPanel params={params} />       
      </Box>

      <Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(9, 1fr)"
          gridAutoRows="140px"
          gap="20px"
          m="10px 10px 0 0"
        >
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center">
            <StatBox
              title="Total Logs"
              subtitle={params.dataFiltered[3].timestamp__count}
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center">
            <StatBoxBySeverity
              title="Total Logs By Severity"
              subtitle={params.dataFiltered[0]}
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center">
            <StatBoxBySource
              title="Total Logs"
              subtitle={params.dataFiltered[1]}
            />
          </Box>
        </Box>
        <Box height="350px" m="50px 0 0 0px" display="flex" alignItems="center">
          <Box display="flex" mt="100px" flexDirection="column" alignItems="center" width="1000px" height="500px">
            <Typography variant="h4" >
              Histogram - Logs by date
            </Typography>
            <HistogramComponent mt="-20px" />
          </Box>
          <Box display="flex" alignContent="center" flexDirection="column">
            <Box height="250px" m="120px 0 0 -30px" width='600px' display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Typography variant="h4" mb="-20px" >
                Logs per Severity
              </Typography>
              <BarChartComponent mt="-20px" />
            </Box>
            <Box height="250px" ml="-40px" width='600px' display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Typography variant="h4" mb="-20px" >
                Logs per Source
              </Typography>
              <PieChartComponent mt="-20px" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )

}

