import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import axiosConnection from "./functions/axiosConnection";
import { AxiosResponse } from "axios";
import FetchMembers from "./admin/FetchMembers";
import AddMember from "./admin/AddMember";
import Login from "./LoginRegistration/Login";
import Registration from "./LoginRegistration/Registration";
import TemplateFooter from "./components/TemplateFooter";
import TemplateHeader from "./components/TemplateHeader";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@mui/material/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="Main">
      <TemplateHeader />
      <AppBar position="static">
        <header id="header" className="d-flex align-items-center">
          <div className="container d-flex align-items-center justify-content-between">
            <nav id="navbar" className="navbar">
              <Tabs value={value} onChange={handleChange}>
                <LinkTab label="Members" href="/foo" />
                <LinkTab label="Registration" href="/bar" />
                <LinkTab label="Members" href="/baz" />
              </Tabs>
            </nav>
          </div>
        </header>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={8}>
            <Item>
              <Login />
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
              
              <AddMember />
              <FetchMembers />
            </Item>
          </Grid>
        </Grid>
      </TabPanel>
      <TemplateFooter />
    </div>
  );
}
