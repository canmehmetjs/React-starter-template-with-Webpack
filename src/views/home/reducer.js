export default (state = {
    loader: false,
    publicJobs: {},
    currentUser: ""
  }, action) => {
    switch (action.type) {
    
      case "SET_CURRENT_USER":
        return {
          ...state, 
          currentUser: action.payload
      };
      
      case "GET_TEST_DATA_PENDING":
        return {
            ...state, 
            loader: true
        };
    
      case "GET_TEST_DATA_SUCCESS":
        return {
            ...state, 
            loader: false,
            publicJobs: action.payload
        };
      
      case "GET_TEST_DATA_FAILED":
        return {
            ...state, 
            loader: false
        };
        
      default: return state;
    }
  };