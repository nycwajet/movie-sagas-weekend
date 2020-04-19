import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { HashRouter as Router, Route} from 'react-router-dom';
import Home from '../Home/Home';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieEdit from '../MovieEdit/MovieEdit';


class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount(){
    this.displayAllMovies();
  }

  displayAllMovies = ()=>{
    this.props.dispatch({
      type: 'GET_MOVIES'
    })
  }




  render() {
    return (
      <Router>
        <div className="App">
          
          <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/details" component={MovieDetails} />
              {/* <Route exact path="/edit" component={MovieEdit} /> */}
            </div>
        </div>
      </Router>
    );
  }
}

export default connect() (App);
