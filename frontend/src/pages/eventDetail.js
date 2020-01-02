import React, { Component } from 'react'
import { Grid, Button, Divider } from '@material-ui/core'
import { getEventDetail } from "../_actions/allActions"
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


export class EventDetail extends Component {
    componentDidMount() {
        this.props.getEventDetail(this.props.eventId)
    }
    render() {
        const { data, isLoading, error } =
            this.props.eventDetail
        console.log(this.props.eventId)
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
                    <h1>ERROR</h1>
                </div>
            );
        }
        return (
            <div>
                {data.map((entry, index) => {

                    return (
                        <div style={{ padding: "2vh 7vw", marginTop: "10vh" }} >
                            <Grid>
                                <Grid style={{
                                    // backgroundImage: `url(${entry.img})`
                                    width: "85vw",
                                    height: "80vh",
                                    objectFit: "cover",
                                    backgroundImage: `url(${entry.img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}>
                                </Grid>
                                <Grid container direction="row">
                                    <Grid xs={10}><h1>{entry.title}</h1></Grid>
                                    <Grid xs={2}><h2>{entry.price}</h2></Grid>
                                </Grid>
                                <Grid container direction="row">
                                    <Grid xs={10}>{entry.category.name}</Grid>
                                    <Grid xs={2}><Button fullWidth>BUY</Button></Grid>
                                </Grid>
                                <Grid container direction="row" style={{marginBottom:"1%"}} >
                                    <Grid xs={4} >
                                        <h2>Hosted By</h2>
                                        <div style={{
                                            width: "8vw",
                                            height: "8vw",
                                            objectFit: "cover",
                                            backgroundImage: `url(${entry.hostedBy})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center"
                                        }}>
                                        </div>

                                    </Grid>
                                    <Grid xs={6}>
                                    <h2>Date</h2>
                                        {entry.startDate.slice(0, 10)}
                                        </Grid>
                                    <Grid xs={2}>
                                    <h2>Contact Person</h2>
                                        {entry.user.name}
                                        </Grid>
                                </Grid>
                                <Divider />
                            </Grid>
                            <Grid  container direction="row" style={{maxWidth:"86vw"}}>
                                <Grid item xs={6} style={{padding:"1% 1% 1% 0"}}><p style={{textAlign:"justify", margin:"0"}} >{entry.description}</p></Grid>
                                <Divider orientation="horizontal" />
                                <Grid item xs={6}style={{padding:"1% 0 1% 1%"}}>{entry.urlMaps}</Grid>
                            </Grid>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        eventId: ownProps.match.params.id,
        eventDetail: state.eventDetail
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getEventDetail: (eventId) => {
            dispatch(getEventDetail(eventId))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventDetail));