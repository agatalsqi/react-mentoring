import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';


import './App.css';

import About from './components/About';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/clients" component={Clients} clientsAmount={12}/>
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
