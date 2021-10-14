import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axiosConnection from './functions/axiosConnection';
import { AxiosResponse } from 'axios';
import FetchMembers from './admin/FetchMembers';
import AddMember from './admin/AddMember';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1), //grid padding
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {


  return(
    <div className="App">
      <header className="App-header">
        <ul>
          <AddMember />
          <FetchMembers />
      </ul>
      </header>
    </div>
  );
}

export default App;
