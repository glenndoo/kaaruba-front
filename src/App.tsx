import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axiosConnection from "./functions/axiosConnection";
import { AxiosResponse } from "axios";
import FetchMembers from "./admin/FetchMembers";
import AddMember from "./admin/AddMember";
import Login from "./LoginRegistration/Login";
import Registration from "./LoginRegistration/Registration";

import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@mui/material/Container";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";

import TextField from "@mui/material/TextField";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;
  return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}

function LinkTab(props: any) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function App() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <div className="Main">
      <AppBar position="static">
        <section id="topbar" className="d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope-fill"></i><a href="mailto:contact@example.com">info@example.com</a>
              <i className="bi bi-phone-fill phone-icon"></i> +1 5589 55488 55
            </div>
            <div className="social-links d-none d-md-block">
              <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </section>
        <header id="header" className="d-flex align-items-center">
          <div className="container d-flex align-items-center justify-content-between">
            <nav id="navbar" className="navbar">
              
        <Tabs value={value} onChange={handleChange}>
          <LinkTab label="Members" href="/foo" />
          <LinkTab label="Registration" href="/bar" />
          <LinkTab label="Login" href="/baz" />
        </Tabs>
            </nav>

          </div>
        </header>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={8}>
            <Item>
              <AddMember />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <FetchMembers />
            </Item>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={8}>
            <Item>
              <Registration />
            </Item>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={8}>
            <Item>
              <Login />
            </Item>
          </Grid>
        </Grid>
      </TabPanel>
      <footer id="footer" className="fixed-bottom">
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Kaaruba Transport Group Cooperative</span></strong>. All Rights Reserved
          </div>
          <div className="credits">

            Designed by <a href="/">GDMR</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
/*
<div className="App">
      <header className="App-header">
        <Grid item xs>
          <Item>
            <AddMember />
              <hr/>
            <FetchMembers />
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
          </Item>
        </Grid>
      </header>
    </div>*/
