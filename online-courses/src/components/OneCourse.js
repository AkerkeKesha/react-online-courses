import React, { Component } from 'react';
import axios from 'axios';

const OneCourse = (props) => {
    return (
        <div className='container'>
            <p>This is one course page: {props.id}</p>
        </div>
        )

};


export default OneCourse;