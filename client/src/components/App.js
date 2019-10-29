import React, {
  Component,
  Fragment
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AppProvider, {
  Consumer
} from './AppProvider';
// import Navbar from '../components/Navbar/index';
import Create from '../components/Create/index'
import '../App.css';
import AlertSignedOut from './alert-signed-out/AlertSignedOut'
import AlertAccountCreated from './alert-account-created/AlertAccountCreated';
import Login from './Login';
import Signup from './Signup';
import FlashMessage from './FlashMessage';
import Dashboard from './Dashboard';
import Teleport from '../components/Teleport/index';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <AppProvider>
          <Router>
            <Fragment>
              <Route exact path="/" component={() => <Login />} />
              <FlashMessage />
              <Route exact path="/login" component={() => <Login />} />
              <Route exact path="/signup" component={() => <Signup />} />
              <Route exact path="/signedOut" component={() => <AlertSignedOut />} />
              <Route exact path="/accountCreated" component={() => <AlertAccountCreated />} />
              <Route exact path="/consumer" component={() => <Consumer />} />
              <Route exact path="/dashboard" component={() => <Dashboard />} />

              <Switch>
                <Route path="/Safety" exact render={() => <Teleport src="https://teleport.org/cities/philadelphia/widget/crime/?currency=USD" />} />
                <Route path="/Salaries" exact render={() => <Teleport src="https://teleport.org/cities/pittsburgh/widget/salaries/?currency=USD" />} />
                <Route path="/Startups" exact render={() => <Teleport src="https://teleport.org/cities/philadelphia/widget/startup/?currency=USD" />} />
                <Route path="/Lgbt" exact render={() => <Teleport src="https://teleport.org/cities/philadelphia/widget/tolerance/?currency=USD" />} />
                <Route path="/Education" exact render={() => <Teleport src="https://teleport.org/cities/philadelphia/widget/education/?currency=USD" />} />
                <Route path="/Cost" exact render={() => <Teleport src="https://teleport.org/cities/philadelphia/widget/costs/?currency=USD" />} />
                <Route path="/Climate" exact render={() => <Teleport src="https://teleport.org/cities/philadelphia/widget/weather/?currency=USD" />} />
                <Route path="/Qaulity" exact render={() => <Teleport src="https://teleport.org/cities/philadelphia/widget/scores/?currency=USD" />} />
              </Switch>
            </Fragment>
          </Router>
        </AppProvider>
      </div>
    );
  }
}