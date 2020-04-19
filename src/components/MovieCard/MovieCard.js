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
        let item = this.props.reduxStore.item[index]

        return (
            <Router>
                <div>
                    <h2>{item.title}</h2>
                    <img src={item.poster} alt={this.props.reduxStore.item.title}
                    onClick = {()=>{this.movieDetails(id)}}
                    />
                    {/* <p>{movie.description}</p> */}
                </div>
            </Router>
            );
        }
    }

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default withRouter(connect(mapStateToProps) (MovieCard));