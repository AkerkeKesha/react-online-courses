import React, { Component } from 'react';
import axios from 'axios';

class Courses extends Component {
    state = {
        courses: []
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/courses/')
            .then( res => {
                console.log(res);
                this.setState({ courses: res.data });
            })

    }
    render() {
        const { courses } = this.state;
        const courseList = courses.length ? (
            courses.map( course => {
                return (
                    <div className='collection-item' key={course.id}>
                        <h3 className='light'>{ course.title }</h3>
                        <p className='light'>{ course.description }</p>
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