import React, { Component } from 'react';
import Layout from '../../components/layout'
import Actions from './actions'

class Orders extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(Actions.test("Steve Jobs"));
  }

  render () {
    return (
      <Layout className="orders">
        Welcome Orders {this.props.test}
      </Layout>
    );
  }
}

export default Orders;