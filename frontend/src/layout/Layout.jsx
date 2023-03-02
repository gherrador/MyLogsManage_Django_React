import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material'
import Logo from '../assets/logo.png'
export const Layout = ({ children }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{
                    background: 'rgb(224,135,0)',
                    backgroundImage: 'linear-gradient(90deg, rgba(224,135,0,1) 0%, rgba(255,252,0,1) 100%)',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Box display="flex" alignItems="center">

                        <img
                            alt="profile-user"
                            width="50px"
                            height="50px"
                            src={Logo}
                            style={{ cursor: "pointer", borderRadius: "50%", marginRight: "10px" }}

                        />

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "Orbitron" }}>
                            My Manage Logs
                        </Typography>
                    </Box>
                    <Box>
                        <Link to={'https://github.com/gherrador'} style={{ textDecoration: "none", listStyle: "none" }}>
                            <IconButton>
                                <GitHubIcon sx={{ width: "30px", height: "30px" }} />
                            </IconButton>
                        </Link>
                        <Link to={'http://www.linkedin.com/in/neri-gustavo-herrador-rojo'} style={{ textDecoration: "none", listStyle: "none" }}>
                            <IconButton>
                                <LinkedInIcon sx={{ width: "30px", height: "30px" }} />
                            </IconButton>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <main>{children}</main>
            <Box
                display="flex"
                justifyContent="end"
                alignItems="center"
                sx={{
                    marginTop:'50px',
                    width: '100%',
                    height: '50px',
                    bottom: 0,
                    background: 'rgb(224,135,0)',
                    backgroundImage: 'linear-gradient(90deg, rgba(224,135,0,1) 0%, rgba(255,252,0,1) 100%)'
                }} component="footer" square variant="outlined">
                <Box mr={2}>
                    <Typography>
                        Developed By Gustavo Herrador
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
