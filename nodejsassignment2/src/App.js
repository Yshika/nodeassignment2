import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';


import CreateDetail from './components/CreateDetail';
import ShowDetailList from './components/ShowDetailList';
import ShowDetailDetails from './components/ShowDetailDetails';
import UpdateDetailInfo from './components/UpdateDetailInfo';
import UpdatePhoto from './components/UpdatePhoto';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowDetailList} />
          <Route path='/create-details' component={CreateDetail} />
          <Route path='/edit-photo/:id' component={UpdatePhoto} />
          <Route path='/edit-details/:id' component={UpdateDetailInfo} />
          <Route path='/show-details/:id' component={ShowDetailDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
