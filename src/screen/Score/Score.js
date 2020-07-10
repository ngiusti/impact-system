import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import classes from './Score.module.scss'


import Button from '../../components/UI/Button/Button'

export default class Score extends Component {

    componentDidMount() {
        console.log('hello from Score')
    }

    render() {
        return (
            <div>
                <div>
                    <Tabs>
                        <TabList className={classes.TabTitles}>
                            <Tab>Session Scorecard</Tab>
                            <Tab>LeaderBoards</Tab>
                            <Tab>Session History</Tab>
                            <Tab>Badges</Tab>
                            <Tab>Profile</Tab>
                        </TabList>
                        <div style={{margin: '10%'}}>
                            <TabPanel>
                                <h2>Session Scorecard Info</h2>
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
            </div>
        )
    }
}
