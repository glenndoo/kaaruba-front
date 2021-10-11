import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axiosConnection from './functions/axiosConnection';
import { AxiosResponse } from 'axios';
import FetchMembers from './admin/FetchMembers';

function App() {


  return(
    <div className="App">
      <header className="App-header">
        <ul>
          <FetchMembers />
      </ul>
      </header>
    </div>
  );
}

export default App;
