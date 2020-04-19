import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard'

class Details extends Component {

    homePage = () => {
        this.props.history.push('/')
    }

    editMovie = () => {
        this.props.history.push('/edit');
        this.props.dispatch({type: 'GET_DETAILS', payload: {...this.props.item}})
    }


  render() {
    return (
      <Router>
          <h1>Details</h1>
        <div>
            {/* <MovieCard id={currentID} /> */}
            <h2>{this.props.reduxStore.details.title}</h2>
            <p>{this.props.reduxStore.details.description}</p>
            <button onClick={this.homePage}>Go Back</button>
            <button onClick={this.editMovie}>Edit Movie Information</button>
   
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps) (Details);