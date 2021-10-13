import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axiosConnection from "../functions/axiosConnection";
import FetchMembers from "./FetchMembers";
import { FormLabel } from "@mui/material";

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
    <h1>Register Member</h1>
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
          <FormLabel>Member Number</FormLabel>
          <Field name="member_number" />
          {errors.member_number && touched.member_number ? (
            <div>{errors.member_number}</div>
          ) : null}
          <FormLabel>First Name</FormLabel>
          <Field name="first_name" label="First Name" />
          {errors.first_name && touched.first_name ? (
            <div>{errors.first_name}</div>
          ) : null}
          <FormLabel>Middle Name</FormLabel>
          <Field name="middle_name" />
          {errors.middle_name && touched.middle_name ? (
            <div>{errors.middle_name}</div>
          ) : null}
          <FormLabel>Last Name</FormLabel>
          <Field name="last_name" />
          {errors.last_name && touched.last_name ? (
            <div>{errors.last_name}</div>
          ) : null}
          <FormLabel>Tax Identification Number</FormLabel>
          <Field name="tax_identification_number" />
          {errors.tax_identification_number &&
          touched.tax_identification_number ? (
            <div>{errors.tax_identification_number}</div>
          ) : null}
          <button type="submit">Register Member</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default AddMember;
