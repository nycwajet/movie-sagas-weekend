import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router} from 'react-router-dom';


class Home extends Component {


  render() {
    
    return (
      <Router>
          <h1>Welcome Please Click On A Movie!!!!</h1>
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps) (Home);