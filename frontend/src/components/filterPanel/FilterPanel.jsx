import { Box, useTheme, Button } from '@mui/material'
import { tokens } from '../../settings/theme'
import { severityOptions, sourceOptions } from "../../utils";
import moment from 'moment'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

export const FilterPanel = ({ params }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center" justifyContent="start">
        <div><span style={{ color: "white", fontWeight: "bold", marginRight: "5px" }}>From:</span><input type='date' value={params.startDate ? moment(params.startDate).format("YYYY-MM-DD") : moment(params.initialValues.start).format("YYYY-MM-DD")} onChange={e => params.setStartDate(e.target.value)} /></div>
        <div style={{ marginLeft: '20px' }}> <span style={{ color: "white", fontWeight: "bold", marginRight: "5px" }}>To:</span> <input type='date' value={params.endDate ? moment(params.endDate).format("YYYY-MM-DD") : moment(params.initialValues.end).format("YYYY-MM-DD")} onChange={e => params.setEndDate(e.target.value)} /></div>
      </Box>
      <Box ml="20px">
        <select value={params.severity} onChange={(e) => params.setSeverity(e.target.value)}>
          {
            severityOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)
          }
        </select>
      </Box>
      <Box ml="20px">
        <select value={params.source} onChange={(e) => params.setSource(e.target.value)}>
          {
            sourceOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)
          }
        </select>
      </Box>
      <Box>
        <Button
          onClick={params.getNewDateFiltered} 
          sx={{
            backgroundColor: colors.greenAccent[700],
            color: colors.grey[100],
            fontSize: "12px",
            fontWeight: "bold",
            padding: "5px 20px",
            marginLeft: "10px"

          }}
        >
          <FilterAltOutlinedIcon sx={{ mr: "10px" }} />
          Filter
        </Button>
      </Box>

    </Box>

  )
}
