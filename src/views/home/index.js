/*

This is the entry point for a view. 

We define all the state mapping here for the view. 

mapStateToProps is the function that provides the state object from reducer to props 
that will eventually be consumed by the view. 

Whenever we define a new state in reducer ( reducer.js file ), we need to map it here as well.

*/

import { connect } from 'react-redux';
import Home from './home'

function mapStateToProps(state) {
  return {
    currentUser: state.home.currentUser,
    publicJobs: state.home.publicJobs
  };
}

export default connect(mapStateToProps)(Home);