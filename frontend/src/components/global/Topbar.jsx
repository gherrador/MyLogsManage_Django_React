import { Box, IconButton, useTheme } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext } from "../../context"
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Link } from "react-router-dom";

export const Topbar = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)


  return (
    <Box display='flex' justifyContent="end" p={2} mr={2}>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <Link to={"/"} style={{ textDecoration: "none", listStyle: "none" }}>
          <IconButton>
            <HomeOutlinedIcon />
          </IconButton>
        </Link>
        <Link to={'https://github.com/gherrador'} style={{ textDecoration: "none", listStyle: "none" }}>
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </Link>
          <Link to={'http://www.linkedin.com/in/neri-gustavo-herrador-rojo'} style={{ textDecoration: "none", listStyle: "none" }}>
        <IconButton>
            <LinkedInIcon />
        </IconButton>
          </Link>
      </Box>
    </Box>
  )
}

