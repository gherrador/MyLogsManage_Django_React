export const getSeverityOptions = (data) => {
    const setObj = new Set(); // creamos pares de clave y array

    const severityOptions = data.reduce((acc, data) => {
        if (!setObj.has(data.severity)) {
            setObj.add(data.severity, data)
            acc.push(data)
        }
        return acc;
    }, []);
    return severityOptions
  
}

export const getSourceOptions = (data) => {
    const setObj = new Set(); // creamos pares de clave y array

    const sourceOptions = data.reduce((acc, data) => {
        if (!setObj.has(data.source)) {
            setObj.add(data.source, data)
            acc.push(data)
        }
        return acc;
    }, []);
    return sourceOptions
  
}

