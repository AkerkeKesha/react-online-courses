import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Registration from './components/Registration';
import Page from './components/Page';
import OneCourse from './components/OneCourse';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Registration}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/page' component={Page}></Route>
            <Route path="/course/:id" component={OneCourse}></Route>
          </Switch>
          <Footer/> 
        </div>
      </BrowserRouter>     
    );
  }
}

export default App;
