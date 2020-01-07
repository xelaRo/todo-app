import React from 'react';
import './App.scss';

import MainPage from './pages/main/mainpage.component';
import Header from './components/header/header.componenet'

class App extends React.Component {


  render(){
    return (
      <div className="page-container">
        <Header />
        <MainPage />
      </div> 
    );
  }
}

export default App;
