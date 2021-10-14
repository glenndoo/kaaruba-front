import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axiosConnection from './functions/axiosConnection';
import { AxiosResponse } from 'axios';
import FetchMembers from './admin/FetchMembers';
import AddMember from './admin/AddMember';

import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function App() {


  return(
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
    </div>
  );
}

export default App;
