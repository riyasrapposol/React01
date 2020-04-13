import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { About } from './components/About';
import { NoMatch } from './components/NoMatch';
import logo from './logo.svg';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';

import Sidebar from './components/Sidebar';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <React.Fragment>
      <Router>
         <NavigationBar />

         <Sidebar /> 

         <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path="/about" component={About} />
        </Layout>
       </Router>
    </React.Fragment>
    );
  }
}
