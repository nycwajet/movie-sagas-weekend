import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class MovieEdit extends Component {

    state = {
        newDetails: {
        title: '',
        description: ''
        }
    }


    handleUpdate = () => {
        // event.preventDefault();
        this.props.dispatch({
            type: 'UPDATE_MOVIE',
            payload: this.newDescription
        })
        this.props.history.push('/details')
    }


  render() {
    return (
      <Router>
        <div>
            <h2>{this.props.reduxStore.details.title}</h2>
            
            <textarea placeholder="Edit description" 
            onChange={(event) => this.handleUpdate(event)}
            value={this.newDescription}
            />
            <div>
            <button onClick={this.handleUpdate}>Save</button>
            </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps) (MovieEdit);