import React from 'react';

import classes from './slider.module.scss'

const Slider = (props) => (
    <div className={classes.SliderContent}>
        <h2 className={classes.SliderTitle}>{props.title}</h2>
        <div>
            <input type="range" min="1" max="100"  value='50' className={classes.Slider} id="myRange"/>
        </div>
        <h5 className={classes.SliderUnit}>{props.unit}</h5>
    </div>
)

export default Slider