import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {ReactComponent as HelmetLogo} from '../../assets/helmet-logo.svg';
import * as actionTypes from '../../store/actions'
import Badge from '../../components/badge/badge'
import Button from '../../components/UI/button/button'
import ScrollingNumber from '../../components/UI/scolling-number/scrolling-number'

import classes from './score.module.scss'


class Score extends Component {

    componentDidMount() {
    }

    getSeconds  = (time) => {
        return ('0' + time % 60).slice(-2);
    }

    getMin  = (time) => {
        return Math.floor(time / 60);
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
                            <TabPanel >
                                <div className={classes.SectionTitleWrap}>
                                    <h2 className={classes.SectionTitle}>Cluster Shot</h2>
                                    <h2 className={classes.SectionTitle}>Distance:<ScrollingNumber number={150}/>ft</h2>
                                </div>
                                <div className={classes.LeaderBoardWrap}>
                                    {this.props.players.map((item, index) => (
                                    <div className={classes.PlayerInfo}>
                                        <h2 className={classes.PlayerName}>{item.name}</h2>
                                        <div className={classes.PlayerStatsWrap}>
                                            <h2 className={[classes.PlayerStats].join(' ')}><span className={[classes.SymbolLocation, classes.LossCross].join(' ')}><HelmetLogo className={classes.Logo} /></span>Score: <ScrollingNumber number={300}/></h2>
                                            <h2 className={classes.PlayerStats}><span className={[classes.SymbolLocation, classes.LossCross].join(' ')}>X</span> Time: <ScrollingNumber number={this.getMin(item.time)}/>:<ScrollingNumber number={this.getSeconds(item.time)}/></h2>
                                            <h2 className={classes.PlayerStats}><span className={[classes.SymbolLocation, classes.LossCross].join(' ')}>X</span>Hits: <ScrollingNumber number={item.hit}/></h2>
                                            <h2 className={classes.PlayerStats}><span className={[classes.SymbolLocation, classes.LossCross].join(' ')}>X</span>Misses: <ScrollingNumber number={item.miss}/></h2>
                                            <h2 className={classes.PlayerStats}><span className={[classes.SymbolLocation, classes.LossCross].join(' ')}>X</span>Bullet Spread: <ScrollingNumber number={32}/>mm</h2>
                                        </div>
                                    </div>   
                                    ))}  
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
                <Button linkTo="/GameSelect" clicked={() => this.props.newGame()}>New Session</Button>
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

const mapDispatchToProps = dispatch => {
    return {
        newGame: () => dispatch({type: actionTypes.NEW_GAME})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score)