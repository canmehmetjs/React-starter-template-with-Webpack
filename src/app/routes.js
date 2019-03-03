/*
Contains all the routes to which view components are 
mapped and will be accessed eg: 
home will be accessed at / 
or 
myAccount at /account. 

For every new view added, entry for mapping the component to its route will be done here.
*/
import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import NotFound from "../views/notfound"
import Home from "../views/home"
import Orders from '../views/orders'

/**
 * Defines components to routes mapping.
 *
 * Everytime a new view is created, entry is required here to map the component to a specific route.
 *
 * [IMPORTANT]
 * All route entries are required to be done before the notFound component.
 *
 * @returns {XML}
 */
export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path='/myorders' component={Orders}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  );
}