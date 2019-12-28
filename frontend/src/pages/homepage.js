import React, { Component } from 'react';
import { Grid, TextField } from '@material-ui/core';
import Contact from './contact'
import TodayEvent from './todayEvent';


export default class Homepage extends Component {

    render() {

        return (
            <div>
                <div style={{ backgroundColor: "pink", padding: "10vh 7vw 5vw 7vw" }}>
                    <TextField id="standard-basic" label="Search Event ~" fullWidth />
                </div>

                <div style={{ backgroundColor: "pink", padding: "0 7vw" }}>
                    <h1 margin="0">Category</h1>
                </div>
                <div>
                    <Contact />
                </div>
                <div>
                    <TodayEvent />
                </div>
            </div>
        )
    }
}