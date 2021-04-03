import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import Login from './Pages/Login'
import AdminPage from './LoginComp/Admin';
import { ProtectedRoute } from './LoginComp/ProtectedRoute';
import UndefPage from './LoginComp/UndefPage';



function App() {
  return (
    
    <Router>
      
      <Switch>
      <ProtectedRoute path='/admin' component={AdminPage}/>
        <Route exact path='/'>
          <Navbar/>
          <FirstPage/>
        </Route>
        <Route exact path='/first'>
          <Navbar />
          <FirstPage/>
        </Route>
        <Route exact path='/second'>
          <Navbar/>
          <SecondPage/>
        </Route>
        <Route exact path='/top'>
          <Navbar/>
        </Route>
        <Route exact path='/log'>
          <Login/>
        </Route>
        <Route path="*" component={UndefPage} />  
      </Switch>

    </Router>
    
  );
}

export default App;