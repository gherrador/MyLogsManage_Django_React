import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../settings/theme'


export const StatBox = ({ title, subtitle }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100] }}>
                    {title}
                </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" >
                <Typography variant="h4" fontWeight="bold" sx={{ color: colors.greenAccent[500] }}>
                    {subtitle}
                </Typography>
            </Box>
        </Box>
    )
}


export const StatBoxBySeverity = ({ title, subtitle }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" flexDirection="column" justifyContent="space-between">
                <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100] }}>
                    {title}
                </Typography>
                <Box display="flex" flexDirection="column">
                    <ul>

                        {subtitle.map((sub,index) => (
                            <li key={index}>{sub.severity}: {sub.totalLogsBySeverity}</li>
                        ))}


                    </ul>
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" >

            </Box>
        </Box>
    )
}

export const StatBoxBySource = ({ title, subtitle }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" flexDirection="column" justifyContent="space-between">
                <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100] }}>
                    {title}
                </Typography>
                <Box display="flex" flexDirection="column">
                    <ul>

                        {subtitle.map((sub,index) => (
                            <li key={index}>{sub.source}: {sub.totalLogsBySource}</li>
                        ))}


                    </ul>
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" >

            </Box>
        </Box>
    )
}