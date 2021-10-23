import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import React from 'react';
import Footer from './components/Footer';
// import Plantor from './pages/Plantor';
import Donor from './pages/Donor';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
// import { FirebaseDatabaseProvider,FirebaseDatabaseNode } from "@react-firebase/database";
// import { initializeApp } from 'firebase/app';
// import firebase from 'firebase/compat/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

function App() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  // const config = {
  //   apiKey: "AIzaSyAGq0QP9ncJK1I94kWs1H8yo7thj0V5PA8",
  //   authDomain: "plantify-329818.firebaseapp.com",
  //   projectId: "plantify-329818",
  //   storageBucket: "plantify-329818.appspot.com",
  //   messagingSenderId: "1061695920888",
  //   appId: "1:1061695920888:web:7d87a8ef4501a77393f90d",
  //   measurementId: "G-8KDT12S8D7"
  // };
  // const app = initializeApp(config);
  // const db = getFirestore(app);
  // async function getCities(db) {
  //   const citiesCol = collection(db, 'cities');
  //   const citySnapshot = await getDocs(citiesCol);
  //   const cityList = citySnapshot.docs.map(doc => doc.data());
  //   return cityList;
  // }
  return (
    // <FirebaseDatabaseProvider firebase {...config}>
    <div className="App">
      {/* <FirebaseDatabaseNode
          path="/"
          limitToFirst={2}
          // orderByKey
          orderByValue={"created_on"}>
          {d => {
            return (
              <React.Fragment>
                <pre>Path {d.path}</pre>
                <pre style={{ height: 300, overflow: "auto" }}>
                  Value {(d.value)}
                </pre>
                <button
                  onClick={() => {

                  }}
                >
                  Load more
                </button>
              </React.Fragment>
            );
          }}
        </FirebaseDatabaseNode> */}
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        {/* <Route path='/plant' exact>
            <Plantor />
          </Route> */}
        <Route path='/donor' exact>
          <Donor />
        </Route>
        <Route path='/About' exact>
          <About />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/dash' exact>
          <Dashboard />
        </Route>
        <Route path='*'>
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
      <Footer />
    </div>
    // </FirebaseDatabaseProvider>
  );
}

export default App;
