import React from 'react'

import classes from './Shots.module.scss'

const shots = (props) => (
    <div className={classes.Clip}>
        <div className={classes.BulletWrap}></div>
        <div className={classes.BulletWrap}></div>
        <div className={classes.BulletWrap}></div>
        <div className={classes.BulletWrap}></div>
        <div className={classes.BulletWrap}></div>
        <div className={classes.BulletWrap}></div>
        <div className={classes.BulletWrap}></div>
        <div className={classes.BulletWrap}></div>
        <div className={classes.BulletWrap}></div>
        <div className={classes.BulletWrap}></div>
        <div className={classes.ShotCounter}>
            <h2>10</h2>
        </div>
    </div>
)

export default shots