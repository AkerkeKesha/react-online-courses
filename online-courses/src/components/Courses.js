import React, { Component } from 'react';

class Courses extends Component {
    render() {
        const courseList = this.props.courses.length ? (
            this.props.courses.map( course => {
                return (
                    <div className='collection-item' key={course.id}>
                        <h3>{ course.title }</h3>
                        <p>{ course.description }</p>
                    </div>
                )
            })
        ):(
            <p className='center'>No courses yet</p>
        )
        return (
            <div className='container'>
                {courseList}
            </div>
        )

    };
}

export default Courses;