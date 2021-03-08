import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import ThirdPage from './Pages/ThirdPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={FirstPage} />
        <Route path='/first' exact component={FirstPage} />
        <Route path='/second' component={SecondPage} />
        <Route path='/third' component={ThirdPage} />
      </Switch>
    </Router>
  );
}

export default App;