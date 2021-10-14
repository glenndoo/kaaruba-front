import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axiosConnection from "../functions/axiosConnection";
import FetchMembers from "./FetchMembers";
import { FormLabel } from "@mui/material";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


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


const AddMember = () => (
  <div>
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
        await conn.post("registerMember", { values }).then((response) => {
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
              
                 <Field className="form-input"  name="first_name" placeholder="First Name"/>
                {errors.first_name && touched.first_name ? (
                  <div className="errorMessage">{errors.first_name}</div>
                ) : null}
            </Grid>
            <Grid item xs={4}>
                <Field className="form-input" name="middle_name" placeholder="Middle Name"/>
                {errors.middle_name && touched.middle_name ? (
                  <div>{errors.middle_name}</div>
                ) : null}
            </Grid>
            <Grid item xs={4}>
                <Field className="form-input" name="last_name" placeholder="Last Name"/>
                {errors.last_name && touched.last_name ? (
                  <div>{errors.last_name}</div>
                ) : null}
            </Grid>
            <Grid item xs>
                <Field className="form-input" name="member_number" placeholder="Member Number"/>
                  {errors.member_number && touched.member_number ? (
                    <div>{errors.member_number}</div>
                  ) : null}
            </Grid>
            <Grid item xs>
                <Field className="form-input" name="tax_identification_number" placeholder="Tax Identification Number"/>
                {errors.tax_identification_number &&
                touched.tax_identification_number ? (
                  <div>{errors.tax_identification_number}</div>
                ) : null}
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained"  size="small" type="submit">Register Member</Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  </div>
);

export default AddMember;
