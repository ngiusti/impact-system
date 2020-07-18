import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {ReactComponent as HelmetLogo} from '../../assets/helmet-logo.svg';
import Badge from '../../components/Badge/Badge'
import Button from '../../components/UI/Button/Button'
import ScrollingNumber from '../../components/UI/ScollingNumber/ScrollingNumber'

import classes from './Score.module.scss'


class Score extends Component {

    componentDidMount() {
        console.log('hello from Score')
    }

    render() {
        return (
            <div>
                <div className={classes.TabsWrap}>
                    <Tabs>
                        <TabList className={classes.TabTitles}>
                            <Tab>Session Scorecard</Tab>
                            <Tab>LeaderBoards</Tab>
                            <Tab>Session History</Tab>
                            <Tab>Badges</Tab>
                            <Tab>Profile</Tab>
                        </TabList>
                        <div>
                            <TabPanel className={classes.LeaderBoardWrap}>
                                {this.props.players.map((item, index) => (
                                <div className={classes.PlayerInfo}>
                                    <h2 className={classes.PlayerName}>{item.name}</h2>
                                    <div className={classes.PlayerStatsWrap}>
                                        <h2 className={[classes.PlayerStats, classes.PlayerWin].join(' ')}>Score: <ScrollingNumber number={300}/></h2>
                                        <h2 className={classes.PlayerStats}>Time: <ScrollingNumber number={item.time}/>:<ScrollingNumber number={12}/></h2>
                                        <h2 className={classes.PlayerStats}>Hits: <ScrollingNumber number={item.hit}/></h2>
                                        <h2 className={classes.PlayerStats}>Misses: <ScrollingNumber number={item.miss}/></h2>
                                        <h2 className={classes.PlayerStats}>Bullet Spread: <ScrollingNumber number={32}/>mm</h2>
                                        <h2 className={classes.PlayerStats}>Target Distance: <ScrollingNumber number={150}/>ft</h2>
                                    </div>
                                </div>                  
                                ))}
                            </TabPanel>
                            <TabPanel>
                                <h2>LeaderBoard Info</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Session History Info</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Badges Info</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Profile Info</h2>
                            </TabPanel>
                        </div>

                    </Tabs>
                </div>
                <Button linkTo="/GameSelect">New Session</Button>
                <Badge/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        players: state.players
    }
}


export default connect(mapStateToProps)(Score)