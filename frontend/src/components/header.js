import React, { Component } from 'react';
import { Grid, TextField, Modal, Card, Button } from '@material-ui/core';
import ModalLogin from './modalLogin';
import ModalRegister from './modalRegister';
import MenuListComposition from './menu';
import { Link, Router } from 'react-router-dom';


export default class Header extends Component {

    render() {

        return (
            <div style={{ backgroundColor: "pink" }}>
                <div style={{ backgroundColor: "#EF4136", padding: "2vh 7vw" }}>
                    <Grid
                        container
                        direction="row"
                        boxShadow={2}
                        style={{
                            margin: "0vh 0vw",
                            width: "86vw",
                            backgroundColor: "#EF4136"
                        }}>
                        {/*Header Button*/}
                        <Grid container xs={10} direction="row">
                            <Link style={{textDecoration:"none"}} to="/"><Button>| ~ Dumb-Tick ~ |</Button></Link>
                            <MenuListComposition />
                        </Grid>
                        <Grid xs={1}><ModalLogin /></Grid>
                        <Grid xs={1}><ModalRegister
                        /></Grid>
                    </Grid>
                </div>


            </div>
        )
    }
}