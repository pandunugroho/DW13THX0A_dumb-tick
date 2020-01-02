import React, { Component } from 'react';
import { Grid } from '@material-ui/core';


export default class Footer extends Component {

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
                        <Grid xs={4}>
                            <h4>| ~ Dumb-Tick ~ |</h4>
                            <p>dfjdfnjsdfjsdnf jkskjfnjafjsdnf jkskjklsjnlaD
                            dfjdfnjsdfjsdnf jkskjfdfjsdnf jksnjaklsjnlaD</p>
                        </Grid>
                        <Grid xs={4}><p>dfjdfnjsdfjsdnf jkskjfnjsdfjsdnf jkskjfnjaklsjnlaDdnf jkskjfnjaklsjn</p></Grid>
                        <Grid xs={4}><p>dfjdfnjsdfjsdnf jkskjfnjsdfjsdnf jkskjfnjaklsjnlaDdnf jkskjfnjaklsjn</p></Grid>
                    </Grid>
                </div>


            </div>
        )
    }
}