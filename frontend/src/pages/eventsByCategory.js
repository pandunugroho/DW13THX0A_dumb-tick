import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { getEventsByCategory } from "../_actions/eventsByCategory"
import { withRouter, Link } from 'react-router-dom'

export class EventsByCategory extends Component {
    componentDidMount() {
        this.props.getEventsByCategory(this.props.categoryId)
    }
    render() {
        const { data, isLoading, error } =
            this.props.eventsByCategory
        console.log(this.props.categoryId)
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
                {data.slice(0, 1).map((entry, index) => {
                    return (
                            <div style={{ margin: "0 2vw" }}>
                                <h1>{entry.category.name}</h1>
                                <Grid>

                                </Grid>
                            </div>
                    )
                })}
                <Grid container direction="row">
                    {data.map((entry, index) => {
                        return (
                            <div style={{ margin: "2vw 2vw", backgroundColor: "white" }}>
                            <Link to={"/event/"+entry.id} style={{textDecoration:"none", color:"black"}}>
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
                                    <Button key={index} style={{ height: "17vh", width: "25.5vw" }}> <h2> {entry.title.slice(0, 48)} </h2> </Button>
                                    <Button>{entry.startDate.slice(0, 10)}</Button>
                                    <Grid style={{ padding: "10px", textAlign: "justify" }}>{entry.description.slice(0, 120)}...</Grid>
                                </Grid>
                                </Link>
                            </div>
                        )
                    })}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        categoryId: ownProps.match.params.id,
        eventsByCategory: state.eventsByCategory
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getEventsByCategory: (categoryId) => {
            dispatch(getEventsByCategory(categoryId))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsByCategory));