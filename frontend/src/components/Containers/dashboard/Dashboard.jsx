import { DashboardPage } from '../../../pages'
import { useContext } from 'react'
import { DashboardContext } from '../../../context/DashboardContext/DashboardContext'

export const DashboardContainer = () => {
    const {data, 
        isLoading, 
        initialValues, 
        setNewData, 
        endDate,
        setEndDate,
        startDate,
        setStartDate,
        setSeverity,
        severity,
        source,
        setSource } = useContext(DashboardContext)
   
      
    const getNewDateFiltered = async () => {
        const params = {
            start: startDate,
            end: endDate,
            severity: severity,
            source: source
        }
       await setNewData(params)
    }



    const params = {
        endDate: endDate,
        startDate: startDate,
        setEndDate: setEndDate,
        setStartDate: setStartDate,
        severity: severity,
        setSeverity: setSeverity,
        source: source,
        setSource: setSource,
        initialValues: initialValues,
        getNewDateFiltered: getNewDateFiltered,
        dataFiltered: data
    }

    return (
        <>
            {isLoading ? <h1>...Charging</h1> : <DashboardPage params={params}/>}
        </>
    )
}
