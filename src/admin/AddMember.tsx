import * as React from 'react';
import "../App.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axiosConnection from "../functions/axiosConnection";
import FetchMembers from "./FetchMembers";
import { FormLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const conn = axiosConnection;

const SignupSchema = Yup.object().shape({
  member_number: Yup.string()
    .max(100, "Too long!")
    .required("Member Number is required"),
  first_name: Yup.string()
    .max(50, "Too Long!")
    .required("First name is required"),
  middle_name: Yup.string().max(50, "Too Long!").required("Required"),
  last_name: Yup.string()
    .max(50, "Too Long!")
    .required("Last name is required"),
  tax_identification_number: Yup.string()
    .max(100, "Too long")
    .required("Tax Identification Number required"),
});
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddMember() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="Main">
      <Button variant="contained" onClick={handleOpen}>+Member</Button>
      <Modal  className="modal-size" open={open} onClose={handleClose} aria-labelledby="modal-modal-title"aria-describedby="modal-modal-description">
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            New Member Info
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h3>Register Member</h3>
            <Formik
              initialValues={{
                member_number: "",
                first_name: "",
                middle_name: "",
                last_name: "",
                tax_identification_number: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={async (values) => {
                // same shape as initial values
                await conn
                  .post("members", {
                    member_number: values.member_number,
                    first_name: values.first_name,
                    middle_name: values.middle_name,
                    last_name: values.last_name,
                    tax_identification_number: values.tax_identification_number,
                  })
                  .then((response) => {
                    console.log(response);
                    if (response.status == 200) {
                      alert("Member saved!");
                    }
                  });
              }}
            >
            {({ errors, touched }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Field
                    className="form-input"
                    name="first_name"
                    placeholder="First Name"
                  />
                  {errors.first_name && touched.first_name ? (
                    <div className="errorMessage">{errors.first_name}</div>
                  ) : null}
                </Grid>
                <Grid item xs={4}>
                  <Field
                    className="form-input"
                    name="middle_name"
                    placeholder="Middle Name"
                  />
                  {errors.middle_name && touched.middle_name ? (
                    <div>{errors.middle_name}</div>
                  ) : null}
                </Grid>
                <Grid item xs={4}>
                  <Field
                    className="form-input"
                    name="last_name"
                    placeholder="Last Name"
                  />
                  {errors.last_name && touched.last_name ? (
                    <div>{errors.last_name}</div>
                  ) : null}
                </Grid>
                <Grid item xs>
                  <Field
                    className="form-input"
                    name="member_number"
                    placeholder="Member Number"
                  />
                  {errors.member_number && touched.member_number ? (
                    <div>{errors.member_number}</div>
                  ) : null}
                </Grid>
                <Grid item xs>
                  <Field
                    className="form-input"
                    name="tax_identification_number"
                    placeholder="Tax Identification Number"
                  />
                  {errors.tax_identification_number &&
                  touched.tax_identification_number ? (
                    <div>{errors.tax_identification_number}</div>
                  ) : null}
                </Grid>
                <Grid item xs={2}>
                  <Button variant="contained" size="small" type="submit">
                    SAVE
                  </Button>
                </Grid>
              </Grid>
            </Form>
            )}
            </Formik>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}