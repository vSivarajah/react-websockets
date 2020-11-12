import React, {useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';

// Hook based context :: from default function export

import AppProvider from './AppContext.js';
import { Dashboard } from './Dashboard.js';
import { NavBar } from './NavBar.js';
const StyledApp = styled.div`

`;


function App() {
  return (
     <StyledApp>
       <AppProvider>
         
         <NavBar/>
         <Dashboard/>
       </AppProvider>
    </StyledApp>
  );
}

export default App;
