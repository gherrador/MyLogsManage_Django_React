import { Box, Button, TextField, FormControl, NativeSelect, InputLabel } from "@mui/material"
import { Formik } from 'formik'
import * as yup from "yup"
import { Header } from "../../components"
import useMediaQuery from '@mui/material/useMediaQuery';
import { severityOptions, sourceOptions } from "../../utils";
export const CreateLog = ({ createLog }) => {

  const isNonMobile = useMediaQuery("(min-width:600px)")

  const initialValues = {
    message: "",
    severity: "",
    source: "",
  }

  const handleFormSubmit = async(value) => {    
    createLog.mutate(value)
    
  }

  const logSchema = yup.object().shape({
    message: yup.string().required("required"),
    severity: yup.string().required("required"),
    source: yup.string().required("required"),
  })


  return (
    <Box m="20px">
      <Header title="CREATE LOG PANEL" subtitle="Create a New Log From This Panel" />

      <Formik
        onSubmit={(values, { resetForm }) => {
          handleFormSubmit(values)
          resetForm()
        }}
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
              <Box display='flex' flexDirection="column">
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
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
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" mt="20px">
              <Button sx={{ margin: "5px" }} type="submit" color="secondary" variant="contained">CREATE</Button>
            </Box>
          </form>
        )}

      </Formik>
    </Box>
  )
}
