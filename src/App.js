import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {notification} from 'antd'

import Landing from './views/Landing/Landing'
import Team from './views/Team/Team'
import Product from './views/Product/Product'
import Resource from './views/Resource/Resource'
import Display from './views/Display/Display'


import Navbar from './views/shared/Navbar'

function App() {

  notification.info({
    message: 'Site under construction!',
    description:
      'A few remaining product pages, and the about page are still being finished.',
    placement: 'bottomRight',
    duration: '20'
  })

  return (
    <Router>

        <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/team" component={Team}/>
          <Route exact path="/products" component={Product}/>
          <Route exact path="/resources" component={Resource}/>
          <Route exact path="/products/:product" component={Display}/>
          <Route exact path="/resources/:resource" component={Display}/>

        </Switch>

      
    </Router>

  );
}

export default App;
