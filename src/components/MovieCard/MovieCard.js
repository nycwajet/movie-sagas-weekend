import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class MovieCard extends Component {

    movieDetails = (id) => {
        this.props.dispatch({
            type: 'GET_DETAILS',
            payload: id
        })
        this.props.history.push(`/details`)
    }

    render() {

        let id = this.props.id
        let index = id -1
        let movie = this.props.reduxStore.movie

        return (
            <Router>
                <div>
                    <h2>{movie.title}</h2>
                    <img src={movie.poster} alt={this.props.reduxStore.movie.title}
                    onClick = {()=>{this.movieDetails(id)}}
                    />
                </div>
            </Router>
            );
        }
    }

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default withRouter(connect(mapStateToProps) (MovieCard));