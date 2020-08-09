import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import './index.scss';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Fragment>
  );
}

export default App;
