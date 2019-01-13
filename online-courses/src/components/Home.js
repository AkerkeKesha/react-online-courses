import React, { Component } from 'react';
import Greeting from './Greeting';
import Courses from './Courses';

class Home extends Component {
        render() {
                return (
                        <div className='container'>
                                <Greeting/>
                                <Courses/>
                        </div>
                );

        }

}

export default Home;
          