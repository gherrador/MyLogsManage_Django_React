import { Box, Button, useTheme } from '@mui/material'
import { useState } from "react"
import { columns, defaultColDef, severityOptions, sourceOptions } from '../../utils'
import { AgGridReact } from 'ag-grid-react'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { tokens } from '../../settings/theme'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

export const TableComponent = ({ Logs, LogsFiltered }) => {
    const navigate = useNavigate();
    const [gridApi, setGridApi] = useState()
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [severity, setSeverity] = useState()
    const [source, setSource] = useState()
    const [dataFiltered, setDataFiltered] = useState()
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const data = Logs.map((log) => {
        return { ...log, timestamp: moment(log.timestamp).format("DD-MM-YYYY") }
    })

    const onGridReady = (params) => {
        setGridApi(params.api)
    }

    const onExportClick = () => {
        gridApi.exportDataAsCsv()
    }

    const onPaginationChange = (pageSize) => {
        gridApi.paginationSetPageSize(Number(pageSize))
    }

    const logRow = (row) => {
        const log = gridApi.getSelectedRows()
        navigate(`/dashboard/detail/${log[0].id}`)
    }

    const FilterData = async () => {
        const filterParams = {
            "start": startDate,
            "end": endDate,
            "severity": severity,
            "source": source
        }
        const data = await LogsFiltered(filterParams)
        setDataFiltered(data.map((log) => {
            return { ...log, timestamp: moment(log.timestamp).format("DD-MM-YYYY") }
        }))
    }

    return (
        <Box mt='xs' className={theme.palette.mode === "dark" ? "ag-theme-alpine-dark" : "ag-theme-alpine"} style={{ height: 450 }}>
            <Box display="flex" mb='lg' justifyContent='space-between' alignItems='center'>
                <Box display="flex" alignItems="center">
                    <Box display="flex" alignItems="center" justifyContent="start">
                        <div><span style={{ color: "white", fontWeight: "bold", marginRight: "5px" }}>From:</span><input type='date' value={startDate} onChange={e => setStartDate(e.target.value)} /></div>
                        <div style={{ marginLeft: '20px' }}> <span style={{ color: "white", fontWeight: "bold", marginRight: "5px" }}>To:</span> <input type='date' value={endDate} onChange={e => setEndDate(e.target.value)} /></div>
                    </Box>
                    <Box ml="20px">
                        <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
                            {
                                severityOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)
                            }
                        </select>
                    </Box>
                    <Box ml="20px">
                        <select value={source} onChange={(e) => setSource(e.target.value)}>
                            {
                                sourceOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)
                            }
                        </select>
                    </Box>
                    <Box>
                        <Button
                            onClick={FilterData}
                            sx={{
                                backgroundColor: colors.greenAccent[700],
                                color: colors.grey[100],
                                fontSize: "12px",
                                fontWeight: "bold",
                                padding: "5px 20px",
                                marginLeft:"10px"
                                
                            }}
                        >
                            <FilterAltOutlinedIcon sx={{ mr: "10px" }} />
                            Filter
                        </Button>

                    </Box>

                </Box>
                <Box>
                    <Button
                        onClick={() => onExportClick()}
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                            marginBottom:"10px"
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        Download Report
                    </Button>
                </Box>
            </Box>

            <AgGridReact
                rowData={dataFiltered ? dataFiltered : data}
                columnDefs={columns}
                defaultColDef={defaultColDef}
                rowSelection='single'
                onRowDoubleClicked={() => logRow()}
                animateRows={true}
                onGridReady={onGridReady}
                pagination={true} paginationPageSize={'10'}
            />
            <Box>
                <select onChange={(e) => onPaginationChange(e.target.value)}>
                    <option value='10'>10</option>
                    <option value='25'>25</option>
                    <option value='50'>50</option>
                    <option value='100'>100</option>
                </select>
            </Box>
        </Box>

    )
}
