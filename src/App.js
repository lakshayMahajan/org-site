import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Landing from './views/Landing/Landing'
import Team from './views/Team/Team'
import Product from './views/Product/Product'



import Navbar from './views/shared/Navbar'

function App() {
  return (
    <>
    <Router>

        <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/team" component={Team}/>
          <Route exact path="/products" component={Product}/>

        </Switch>

      
    </Router>

    </>
  );
}

export default App;
