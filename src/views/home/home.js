/*
This is the main View. 
You write all the view structure for home or any view, 
define all the interactions that user is going to do, consume state values mapped to props.
*/

import React, { Component } from 'react';
import Layout from '../../components/layout'
import Actions from './actions'

export default class Home extends Component {
  
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.dispatch(Actions.greetUser("Xhan Mehmet2"));
  
  }
  
  render() {
    return (
      <Layout className="home">
        Welcome to Home {this.props.currentUser}
      </Layout>
    );
  }
}