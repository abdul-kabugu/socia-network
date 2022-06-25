import React, {useState, useEffect} from 'react';
import  Home from './pages/Home'
import { AppContainer } from './Styles';
import {Routes, Route} from 'react-router-dom'
import CreateProfile from './pages/CreateProfile';
import {createGlobalStyle} from "styled-components"
import { connect } from './logics/Index';
import ShotsPage from './pages/ShotsPage';
const GlobalStyles = createGlobalStyle`
  *{
  
    margin: 0 ;
    padding: 0;
    

  }

  body {
  margin: 0;
 
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 100% ;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`
 
  
function App() {
  useEffect(() => {
    connect()
  }, [])
  return (
    <AppContainer>
      <GlobalStyles />
      <Routes>
        <Route  path="/"  element={<Home />}   />
         <Route path='/create-profile'  element={<CreateProfile />}  />
         <Route path='/shots'  element={<ShotsPage />}  />
        </Routes>
      </AppContainer>
       
  )
}

export default App;
