import React from 'react';
import {Switch, BrowserRouter } from 'react-router-dom'
import './App.scss';
import MainPage from './pages/main/mainpage.component';
import Header from './components/header/header.component';

class App extends React.Component {

  render(){
    return (
        <div>
          <Header />
          <MainPage />
        </div> 
    );
  }
}

export default App;
