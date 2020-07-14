import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {ReactComponent as HelmetLogo} from '../../assets/helmet-logo.svg';


import Badge from '../../components/Badge/Badge'
import Button from '../../components/UI/Button/Button'
import ScrollingNumber from '../../components/UI/ScollingNumber/ScrollingNumber'

import classes from './Score.module.scss'


export default class Score extends Component {

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
                                <div className={classes.PlayerInfo}>
                                    <h2 className={classes.PlayerName}>Player 1</h2>
                                    <div className={classes.PlayerStatsWrap}>
                                        <h2 className={[classes.PlayerStats, classes.PlayerWin].join(' ')}><HelmetLogo className={classes.Logo} />Score: <ScrollingNumber number={300}/><HelmetLogo className={classes.Logo} /></h2>
                                        <h2 className={classes.PlayerStats}>Time: <ScrollingNumber number={1}/>:<ScrollingNumber number={12}/></h2>
                                        <h2 className={classes.PlayerStats}>Hits: <ScrollingNumber number={7}/></h2>
                                        <h2 className={classes.PlayerStats}>Misses: <ScrollingNumber number={3}/></h2>
                                        <h2 className={classes.PlayerStats}>Bullet Spread: <ScrollingNumber number={32}/>mm</h2>
                                        <h2 className={classes.PlayerStats}>Target Distance: <ScrollingNumber number={150}/>ft</h2>
                                    </div>
                                </div>
                                <div className={classes.PlayerInfo}>
                                    <h2 className={classes.PlayerName}>Player 2</h2>
                                    <div className={classes.PlayerStatsWrap}>
                                        <h2 className={classes.PlayerStats}>Score: <ScrollingNumber number={200}/></h2>
                                        <h2 className={[classes.PlayerStats, classes.PlayerWin].join(' ')}><HelmetLogo className={classes.Logo} />Time: <ScrollingNumber number={0}/>:<ScrollingNumber number={54}/><HelmetLogo className={classes.Logo} /></h2>
                                        <h2 className={classes.PlayerStats}>Hits: <ScrollingNumber number={5}/></h2>
                                        <h2 className={[classes.PlayerStats, classes.PlayerWin].join(' ')}><HelmetLogo className={classes.Logo} />Misses:<ScrollingNumber number={5}/><HelmetLogo className={classes.Logo} /></h2>
                                        <h2 className={classes.PlayerStats}>Bullet Spread: <ScrollingNumber number={45}/>mm</h2>
                                        <h2 className={classes.PlayerStats}>Target Distance: <ScrollingNumber number={150}/>ft</h2>
                                    </div>
                                </div>
                                <div className={classes.PlayerInfo}>
                                    <h2 className={classes.PlayerName}>Player 3</h2>
                                    <div className={classes.PlayerStatsWrap}>
                                        <h2 className={classes.PlayerStats}>Score: <ScrollingNumber number={100}/></h2>
                                        <h2 className={classes.PlayerStats}>Time: <ScrollingNumber number={1}/>:<ScrollingNumber number={48}/></h2>
                                        <h2 className={[classes.PlayerStats, classes.PlayerWin].join(' ')}><HelmetLogo className={classes.Logo} />Hits: <ScrollingNumber number={9}/><HelmetLogo className={classes.Logo} /></h2>
                                        <h2 className={classes.PlayerStats}>Misses: <ScrollingNumber number={1}/></h2>
                                        <h2 className={[classes.PlayerStats, classes.PlayerWin].join(' ')}><HelmetLogo className={classes.Logo} />Bullet Spread: <ScrollingNumber number={28}/>mm<HelmetLogo className={classes.Logo} /></h2>
                                        <h2 className={classes.PlayerStats}>Target Distance: <ScrollingNumber number={150}/>ft</h2>
                                    </div>
                                </div>
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
