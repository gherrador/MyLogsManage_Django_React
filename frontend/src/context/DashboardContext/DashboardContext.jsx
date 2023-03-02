import { createContext, useState, useEffect } from "react";
import { getAggregateDataLogs } from "../../api";
import { getDayMinusFive } from '../../utils'

export const DashboardContext = createContext([])

export const DashboardContextProvider = ({ children }) => {  
  const[data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [startDate, setStartDate] = useState(getDayMinusFive(new Date(), -5))
  const [endDate, setEndDate] = useState(new Date().toISOString())
  const [severity, setSeverity] = useState('')
  const [source, setSource] = useState('')


  const initialValues = {
    start: getDayMinusFive(new Date(), -5),
    end: new Date().toISOString()
  }
  const params = {
    start: initialValues.start,
    end: initialValues.end,
    severity: '',
    source: ''
  }

  useEffect(() => {
    getAggregateDataLogs(params)
    .then((data) => setData(data))  
    .finally(() => setIsLoading(false))
    // eslint-disable-next-line
  }, [])

  const setNewData = async(newData) => {
    const data = await getAggregateDataLogs(newData)
    setData(data)
  }

     return (
    <DashboardContext.Provider value={{
      data,
      isLoading,
      initialValues,
      setNewData,
      startDate,
      setSeverity,
      setSource,
      severity,
      source,     
      endDate,
      setEndDate,
      setStartDate

    }}>
      {children}
    </DashboardContext.Provider>
  )
}
