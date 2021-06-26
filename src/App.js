import React from 'react';
import './style.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Content from './components/Content';
import Contactus from './components/Contactus';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Content />
            <Contactus />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
