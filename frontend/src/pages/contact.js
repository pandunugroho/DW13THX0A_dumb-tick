import React, { Component } from 'react'
import { categories, getCategories } from "../_actions/categories"
import { connect } from 'react-redux';
import { Button, Grid } from '@material-ui/core';

class Contact extends Component {
    componentDidMount() {
        this.props.getCategories()
    }
    render() {
        const { data, isLoading, error } =
            this.props.categories
        console.log(this.props.categories)
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
            <div style={{ margin: "0 5vw" }}>
                <Grid container direction="row">
                    {data.map((entry, index) => {
                        return (
                            <div style={{ margin:"0 2vw", backgroundColor: "lightblue" }}>
                                <Grid item>
                                    <Button  key={index} style={{height:"9vh" ,width:"18vw"}}>{entry.name}</Button>
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
        categories: state.categories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => {
            dispatch(getCategories())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);