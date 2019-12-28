import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { todayEvents, getTodayEvents } from "../_actions/todayEvent"

export class TodayEvent extends Component {
    componentDidMount() {
        this.props.getTodayEvents()
    }
    render() {
        const { data, isLoading, error } =
            this.props.todayEvents
        console.log(this.props.todayEvents)
        if (isLoading) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            );
        }
        if (error) {
            return (
                <div>
                    <h1>ERROR !!!</h1>
                </div>
            );
        }

        return (
            <div style={{ margin: "0 5vw" }}>
                <div style={{ margin: "0 2vw" }}>
                    <h1>Today</h1>
                    <Grid>

                    </Grid>
                </div>
                <Grid container direction="row">
                    {data.map((entry, index) => {
                        return (
                            <div style={{ margin: "2vw 2vw", backgroundColor: "lightblue" }}>
                                <Grid container direction="column">
                                    <Grid
                                        style={{
                                            width: "25.5vw",
                                            height: "25vh",
                                            objectFit: "cover",
                                            backgroundImage: `url(${entry.img})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center"
                                        }} ></Grid>
                                    <Button key={index} style={{ minHeight: "9vh", width: "25.5vw" }}> <h2> {entry.title} </h2> </Button>
                                    <Button>{entry.start_time}</Button>
                                </Grid>
                            </div>
                        )
                    })}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todayEvents: state.todayEvents
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getTodayEvents: () => {
            dispatch(getTodayEvents())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodayEvent);