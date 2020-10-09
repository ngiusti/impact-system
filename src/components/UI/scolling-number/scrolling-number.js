import React from "react";
import { Spring, animated, interpolate } from "react-spring/renderprops";
import * as d3 from 'd3-ease'


import classes from './scrolling-number.module.scss'

export default class ScrollingNumber extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classes.ScrollingWrap}>
        <Spring  config={{ duration: 7000, easing: d3.easePoly.exponent(3) }} native from={{ o: 0}} to={{ o: this.props.number }}>
          {({ o, xyz, color }) => (
            <animated.div>
              {// Finally, this is how you interpolate innerText
              o.interpolate(n => n.toFixed(0))}
            </animated.div>
          )}
        </Spring>
      </div>
    );
  }
}