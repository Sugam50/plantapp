import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import {useEffect} from 'react';
import NavBar from './components/NavBar';
import React from 'react';

function App() {
  useEffect(() => {window.scrollTo(0, 0)}, [])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='*'>
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
      <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
        <div class="container text-center">
          <small>Copyright &copy; Your Website</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
