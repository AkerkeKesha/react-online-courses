import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Courses from './components/Courses';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Greeting/>
        <Courses/>
        <Footer/> 
      </div>
    );
  }
}

export default App;
