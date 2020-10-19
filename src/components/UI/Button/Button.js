import React from 'react'
import { Link } from 'react-router-dom'
import './button.scss'

const Button = (props) => (
    <Link to={props.linkTo}>
        <button className={`button ${props.btnType}`} onClick={props.clicked} disabled={props.disabled}>
            {props.children}
        </button>
    </Link >
)

export default Button
