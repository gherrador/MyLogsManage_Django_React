import { /* Navigate */ Route, Routes } from 'react-router-dom';
import { useMode } from '../../hooks'
import { ColorModeContext } from '../../context'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { DashboardContainer, TableContainer, LogDetailContainer, CreateLogContainer } from '../../components'
import { HistogramChart, BarChart, PieChart } from '../../pages'
import { DashboardContextProvider } from '../../context/DashboardContext/DashboardContext';
import { LayoutDashboard } from '../../layout/LayoutDashboard';
export const DashBoardRoutes = () => {
    const [theme, colorMode] = useMode()

    return (
        <DashboardContextProvider>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <LayoutDashboard>
                    <CssBaseline />
                        <Routes>
                            <Route path='/' element={<DashboardContainer />} />
                            <Route path='/table' element={<TableContainer />} />
                            <Route path='/detail/:id' element={<LogDetailContainer />} />
                            <Route path='/create' element={<CreateLogContainer />} />
                            <Route path='/bar' element={< BarChart/>} />
                            <Route path='/pie' element={<PieChart />} />
                            <Route path='/histogram' element={<HistogramChart/>} />                        
                        </Routes>
                        </LayoutDashboard>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </DashboardContextProvider>
    )
}