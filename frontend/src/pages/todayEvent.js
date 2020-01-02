import React, { Component } from 'react';
import { Grid, Button, Card } from '@material-ui/core';
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
                </div>
                <Grid container direction="row">
                    {data.map((entry, index) => {
                        return (
                            <div style={{ margin: "2vw 2vw", backgroundColor: "white" }}>
                                <Grid container direction="column" style={{ width: "25.5vw" }}>
                                    <Grid
                                        style={{
                                            width: "25.5vw",
                                            height: "25vh",
                                            objectFit: "cover",
                                            backgroundImage: `url(${entry.img})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center"
                                        }} >
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            style={{
                                                backgroundColor: "white",
                                                margin: "2% 0% 20% 75%"
                                            }}>
                                            {entry.price}
                                        </Button>
                                    </Grid>
                                    <Button key={index} style={{ height: "17vh", width: "25.5vw" }}> <h2> {entry.title.slice(0,48)} </h2> </Button>
                                    <Button>{entry.startDate.slice(0,10)}</Button>
                                    <Grid style={{ padding: "10px", textAlign: "justify" }}>{entry.description.slice(0, 120)}...</Grid>
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