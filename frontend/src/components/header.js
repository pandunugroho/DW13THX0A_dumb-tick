import React, { Component } from 'react';
import { Grid, TextField, Modal } from '@material-ui/core';
import ModalLogin from './modalLogin';


export default class Header extends Component {

    render() {

        return (
            <div style={{ backgroundColor: "pink" }}>
                <div style={{ backgroundColor: "tomato", padding: "2vh 7vw" }}>
                    <Grid
                        container
                        direction="row"
                        boxShadow={2}
                        style={{
                            margin: "0vh 0vw",
                            width: "86vw",
                            backgroundColor: "tomato"
                        }}>
                            {/*Header Button*/}
                        <Grid xs={10}>| ~ Dumb-Tick ~ |</Grid>
                        <Grid xs={1}>| ~ Login ~ |</Grid>
                        <Grid xs={1}>|  Register  |</Grid>
                    </Grid>
                </div>


            </div>
        )
    }
}