import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateCarrier from './components/CreateCarrier';
import ShowCarrierList from './components/ShowCarrierList';
import ShowCarrierDetails from './components/ShowCarrierDetails';
import UpdateCarrierInfo from './components/UpdateCarrierInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowCarrierList} />
          <Route path='/create-carrier' component={CreateCarrier} />
          <Route path='/edit-carrier/:id' component={UpdateCarrierInfo} />
          <Route path='/show-carrier/:id' component={ShowCarrierDetails} />
        </div>
      </Router>
    );
  }
}

export default App;