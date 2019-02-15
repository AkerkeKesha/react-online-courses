import React, { Component } from 'react';
import OneCourse from './OneCourse';
import axios from 'axios';

class Courses extends Component {
    state = {
        courses: []
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/courses/')
            .then( res => {
                this.setState({ courses: res.data });
            })

    }
    handleClick = (id) => {
        console.log(id);
    };
    render() {
        const { courses } = this.state;
        const courseList = courses.length ? (
            courses.map( course => {
                return (
                    <div className='collection-item' key={course.id}>
                        <h3 className='light'>{ course.title }</h3>
                        <p className='light'>{ course.description }</p>
                        <div className = 'center'>
                            <button className='btn grey' onClick={() => this.handleClick(course.id)}>Learn More</button>
                        </div>
                    </div>
                )
            })
        ):(     
            <p className='center'>No courses yet</p>
        )
        return (
            <div className='container'>
                 { courseList }
            </div>
        )

    };
}

export default Courses;