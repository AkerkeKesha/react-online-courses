import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Courses from './components/Courses';


class App extends Component {
  state = { 
    courses: [
      {id: 1, title:'Algorithms and Data Structures', description:'I know how overwhelming programming can be.I can teach you the ways to remember and actively use algorithms in your projects'},
      {id: 2, title:'Web Development with Django', description:'In this course I teach the modern web-framework called Django. The focus is on 2-3 practical projects'},
      {id: 3, title:'Mobile Application in iOS/Android', description:'Developers of mobile apps earn a lot. In this course I will teach how to build awesome apps. You choose the platform be it iOS or Android'}
    ]
  }
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Greeting/>
        <Courses courses={ this.state.courses }></Courses>
        <Footer/> 
      </div>
    );
  }
}

export default App;
