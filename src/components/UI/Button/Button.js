import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Button.module.scss'

const button = (props) => (
    <Link to={props.linkTo}>
        <button className={[classes.Button, props.BtnStyles].join(' ')} onClick={props.clicked}>
            {props.children}
            {console.log(props)}
        </button>
    </Link>
)

export default button
