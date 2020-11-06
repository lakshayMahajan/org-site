import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {notification} from 'antd'

import Landing from './views/Landing/Landing'
import Team from './views/Team/Team'
import Product from './views/Product/Product'
import Resource from './views/Resource/Resource'
import Display from './views/Display/Display'
import About from './views/About/About'


import Navbar from './views/shared/Navbar'

function App() {



  return (
    <Router>

        <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/products" component={Product}/>
          <Route exact path="/resources" component={Resource}/>
          <Route exact path="/about" component={Team}/>
          <Route exact path="/products/:product" component={Display}/>
          <Route exact path="/resources/:resource" component={Display}/>

        </Switch>

      
    </Router>

  );
}

export default App;
