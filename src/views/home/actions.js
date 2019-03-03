/*

Actions also know as ActionCreators contains the actions 
or executable against an interaction or onLoad etc. 

Simple object defining functions for functionalities like getData on Load. 

We are following redux standards for sending data to store

*/

import Network from '../../utils/network';

const actions = {
  greetUser: (msg) => {
    return {
      type: "SET_CURRENT_USER",
      payload: msg
    }
  },
  getTestData: () => {
    return async dispatch => {
      dispatch({type: "GET_TEST_DATA_PENDING"});
    
      try {
        let response = await Network.get('api/showAllPublicJobs');
        dispatch({type: "GET_TEST_DATA_SUCCESS", payload: response.data});
      } catch (error) {
        dispatch({type: "GET_TEST_DATA_FAILED", payload: error.message});
      }
    }
  }
};

export default actions;