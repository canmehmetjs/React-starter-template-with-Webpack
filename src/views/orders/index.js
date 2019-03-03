import { connect } from 'react-redux';
import Orders from './orders';

const mapStateToProps = (state) => {
  return {
    test: state.orders.test,
    testData: state.orders.testData
  }
};

export default connect(mapStateToProps)(Orders);