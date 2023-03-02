import axios from 'axios'
const URL_BASE = process.env.REACT_APP_BASE_URL
axios.defaults.withCredentials = true


export const getAllLogs = async () => {
    const url = `${URL_BASE}/api/get/`;
    let query = await axios.get(url)
    return query.data
}

export const getLogsById = async (id) => {
    const url = `${URL_BASE}/api/detail/${id}/`;
    let query = await axios.get(url)
    return query.data
}

export const deleteLogRequest = async (id) => {
    console.log(id)
    const url = `${URL_BASE}/api/delete/${id}/`;
    let query = await axios.delete(url)
    return query.data
}

export const updateLogRequest = async (data) => {
    const url = `${URL_BASE}/api/put/${data.id}/`;
    let query = await axios.put(url, data)
    return query.data
}


export const createLogRequest = async (data) => {
    const url = `${URL_BASE}/api/post/`;
    let query = await axios.post(url, data)
    return query.data
}

export const getLogsFiltered = async (data) => {
    const url = `${URL_BASE}/api/logsbyparameter/`;
    let query = await axios.post(url, data)
    return query.data
}


export const  getAggregateDataLogs = async (data) => {
    const url = `${URL_BASE}/api/get_aggregate_data/`;
    let query = await axios.post(url, data)
    return query.data
}
