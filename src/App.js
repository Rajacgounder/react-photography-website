import React from 'react';
import './style.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Content />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
