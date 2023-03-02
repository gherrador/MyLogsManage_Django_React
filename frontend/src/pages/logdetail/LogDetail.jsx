import { Box, Button, TextField, FormControl, NativeSelect, InputLabel } from "@mui/material"
import { Formik } from 'formik'
import * as yup from "yup"
import { Header } from "../../components"
import useMediaQuery from '@mui/material/useMediaQuery';
import { severityOptions, sourceOptions } from "../../utils";
export const LogDetail = ({ data, deleteLog, updateLog }) => {

  const isNonMobile = useMediaQuery("(min-width:600px)")

  const initialValues = {
    id: data[0].id,
    message: data[0].message,
    severity: data[0].severity,
    source: data[0].source,
    timestamp: data[0].timestamp
  }

  const handleFormSubmit = (value) => {
    updateLog.mutate(value)
  }

  const logSchema = yup.object().shape({
    message: yup.string().required("required"),
    severity: yup.string().required("required"),
    source: yup.string().required("required"),
  })


  return (
    <Box m="20px">
      <Header title="LOG DETAIL PANEL" subtitle="Edit or Delete a Log From This Panel" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={logSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(2, minmax(0, 1fr))"
              sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" } }}
            >
              <TextField
                fullWidth
                disabled
                variant="filled"
                type="text"
                label="Id"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.id}
                name="id"
                error={!!touched.message && !!errors.message}
                helperText={touched.message && errors.message}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Message"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.message}
                name="message"
                error={!!touched.message && !!errors.message}
                helperText={touched.message && errors.message}
                sx={{ gridColumn: "span 2" }}
              />
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Severity
                </InputLabel>
                <NativeSelect
                  value={values.severity}
                  onChange={handleChange}
                  onBlur={handleBlur}

                  inputProps={{
                    name: 'severity',
                    id: 'uncontrolled-native',
                  }}
                >
                  {
                    severityOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)
                  }
                </NativeSelect>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Source
                </InputLabel>
                <NativeSelect
                  value={values.source}
                  onChange={handleChange}
                  onBlur={handleBlur}

                  inputProps={{
                    name: 'source',
                    id: 'uncontrolled-native',
                  }}
                >
                  {
                    sourceOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)
                  }
                </NativeSelect>
              </FormControl>
              <TextField
                fullWidth
                disabled
                variant="filled"
                type="text"
                label="Timestamp"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.timestamp}
                name="timestamp"
                error={!!touched.source && !!errors.source}
                helperText={touched.source && errors.source}
                sx={{ gridColumn: "span 2" }}
              />

            </Box>
            <Box display="flex" justifyContent="center" mt="20px">
              <Button sx={{ margin: "5px" }} type="submit" color="secondary" variant="contained">UPDATE</Button>
              <Button onClick={() => deleteLog.mutate(data[0].id)} sx={{ margin: "5px" }} type="submit" color="error" variant="contained">DELETE</Button>
            </Box>
          </form>
        )}

      </Formik>
    </Box>
  )
}
