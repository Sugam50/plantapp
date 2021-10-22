import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import {useEffect} from 'react';
import NavBar from './components/NavBar';
import React from 'react';
import Footer from './components/Footer';
import Plantor from './pages/Plantor';

function App() {
  useEffect(() => {window.scrollTo(0, 0)}, [])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/plant' exact>
          <Plantor/>
        </Route>
        <Route path='*'>
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
