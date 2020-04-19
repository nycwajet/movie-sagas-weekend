import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router} from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';


class Home extends Component {


  render() {
    
    return (
      <Router>

          <h1>Welcome Please Click On A Movie!!!!</h1>

          <div>

          {/* {this.props.reduxStore.item.map(item => {
                return <MovieCard id={item.id} key={item.id} />
            })} */}
        
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps) (Home);