import React from 'react';
import constants from './resources' 
import './App.css';
import Header from './components/Common/Header';
import { Login } from './components/Login';
import { ViewClients } from './components/ViewClients';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Common/Footer';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: ''
    }
  }

  render() {
    console.log('loading');
    return (
      <div className="App">
        <Header name={constants.HEADER} />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/viewClients" element={<ViewClients />} />
            <Route path="/addClient" element={<Login />} />
          </Routes>
        </Router>
        <Footer name={constants.FOOTER} />
      </div>
    );
  }
}

export default App;
