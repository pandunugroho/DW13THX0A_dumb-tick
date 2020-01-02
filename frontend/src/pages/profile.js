
import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { getProfile } from "../_actions/allActions";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



export class Profile extends Component {
    componentDidMount() {
        this.props.getProfile(this.props.profileId)
    }

    render() {

        const { data, isLoading, error } =
            this.props.profile
        console.log(this.props.profile)
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
            <div style={{ backgroundColor: "pink" }}>
                <div style={{ backgroundColor: "pink", padding: "2vh 7vw" }}>
                    <Grid
                        container
                        direction="row"
                        boxShadow={2}
                        style={{
                            margin: "0vh 0vw",
                            width: "86vw",
                            backgroundColor: "pink"
                        }}>
                        {/*Header Button*/}
                        <Grid xs={8}>
                            <h1>Profile</h1>
                            {data.slice(0, 1).map((entry, index) => {
                                return (<div>
                                    <h2>{entry.username}</h2>
                                    <h5>{entry.email}</h5>
                                </div>
                                )
                            })}
                        </Grid>
                        <Grid
                            style={{
                                width: "25.5vw",
                                height: "25vw",
                                objectFit: "cover",
                                backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6e0L57IcpykeCpK-BJWNcISBHH9_L2IXONM0YsOHVyd8balDA&s)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }} ></Grid>
                    </Grid>
                    <Grid>
                        <h1>Favorites</h1>
                        Map Function
                    </Grid>
                </div>



            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        profileId: ownProps.match.params.id,
        profile: state.profile
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProfile: (profileId) => {
            dispatch(getProfile(profileId))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));