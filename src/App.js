import React from 'react';
import './style.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Content from './components/Content';
import Contactus from './components/Contactus';
import Home from './components/Home';
import history from '../history';

function App() {
  return (
    <div className="app">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home}>
            <Route path="/Header" component={Header} />
            <Route path="/Content" component={Content} />
            <Route path="/Contactus" component={Contactus} />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
