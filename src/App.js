// imports
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// other components
import Home from './components/home'
import Nav from './components/nav'
// import Slider from './components/slider'

// styles
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Home/>
      {/* <Slider/> */}
    </BrowserRouter>
  )
}

export default App;