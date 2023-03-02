import { Box, Typography, Button } from '@mui/material'
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import { Link } from "react-router-dom";
import Carousel from '../../components/Carousel/Carousel'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
export const HomePage = () => {

  return (
    <div>
      <Box>
        <Typography
          align="center"
          fontSize={45}
          marginTop="30px"
          sx={{ fontFamily: 'Lilita One' }}>
          Wellcome to My Manage Logs
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" marginTop="2%">
        <Box width="500px" alignItems="center" display="flex" flexDirection="column" justifyContent="center">
          <Typography
            align="center"
            fontSize={35}
            padding
            sx={{ fontFamily: 'Lilita One' }}>
            Powerful Log Analytics
          </Typography>
          <Typography
            marginTop="5%"
            align="center"
            fontSize={20}
            padding
          >
            Search and analyze logs at scale to optimize performance and troubleshoot issues faster. No complex query language required.
          </Typography>
          <Link to={"/dashboard"} style={{ textDecoration: "none", listStyle: "none" }}>
            <Button
              sx={{
                marginTop: "20px",
                backgroundColor: "#0069FF",
                color: "white",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "5px 20px",
                marginLeft: "10px",
                pointerEvents:"none"

              }}
            >
              Go To Dashboard
            </Button>
          </Link>
        </Box>
        <Box sx={{ width: '450px' }}>
          <Carousel />
        </Box>
      </Box>
      <Box display="flex"
        marginTop="2%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        sx={{ background: 'rgb(239,234,255)' }}
      >
        <Box>
          <Typography
            marginTop="2%"
            align="center"
            fontSize={25}
            padding
            fontWeight={600}
          >
            WHY MyManageLogs?
          </Typography>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(6, 1fr)"
          gridAutoRows="140px"
          gap="20px"
          mt="-10px"
        >
          <Box
            gridColumn="span 3"
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Box mr={2}>
              <AutoGraphOutlinedIcon style={{ width: "50px", height: "50px" }} />
            </Box>
            <Box width={400}>
              <Typography
                align="center"
                fontSize={20}
                fontWeight={600}
              >
                Problem solver
              </Typography>
              <Typography
                align="center"
                fontSize={18}
              >
                Investigate and Troubleshoot Issues Faster
              </Typography>

            </Box>
          </Box>
          <Box
            gridColumn="span 3"
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Box mr={2}>
              <DashboardCustomizeOutlinedIcon style={{ width: "50px", height: "50px" }} />
            </Box>
            <Box width={400}>
              <Typography
                align="center"
                fontSize={20}
                fontWeight={600}
              >
                Easy to manage
              </Typography>
              <Typography
                align="center"
                fontSize={18}
              >
                Easily Manage Your Logs with an Intuitive Platform
              </Typography>

            </Box>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(6, 1fr)"
          gridAutoRows="140px"
          gap="20px"
          m="10px 10px 0 0"
        >
          <Box
            gridColumn="span 3"
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Box mr={2}>
              <PieChartOutlineOutlinedIcon style={{ width: "50px", height: "50px" }} />
            </Box>
            <Box width={400}>
              <Typography
                align="center"
                fontSize={20}
                fontWeight={600}
              >
                Multiples Chart
              </Typography>
              <Typography
                align="center"
                fontSize={18}
              >
                Dinamics graphs for a better understanding of what is happening
              </Typography>

            </Box>
          </Box>
          <Box
            gridColumn="span 3"
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Box mr={2}>
              <TableChartOutlinedIcon style={{ width: "50px", height: "50px" }} />
            </Box>
            <Box width={400}>
              <Typography
                align="center"
                fontSize={20}
                fontWeight={600}
              >
                Filter and Sort
              </Typography>
              <Typography
                align="center"
                fontSize={18}
              >
                Filter and sort the information as you need
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

