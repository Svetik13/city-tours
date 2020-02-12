import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import "./App.scss";
import TourList from './components/TourList';
import About from './About';
import Home from './Home';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import './App.scss';

class App extends Component {
  render() {
    return (
    <Router>
      <main>
        <Navbar />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        </Switch>
      <TourList />
    </main>
    </Router>
    
    )
  }
}

export default App;
