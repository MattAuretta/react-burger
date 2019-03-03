import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
    <button
        // .join is used to make the classes one string instead of an array
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;