import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Button.module.scss'

const button = (props) => (
    <Link to={props.linkTo}>
        <button className={[classes.Button, props.btnStyles].join(' ')} onClick={props.clicked} disabled={props.disabled}>
            {props.children}
        </button>
    </Link>
)

export default button
