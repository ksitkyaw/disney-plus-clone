import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Detail from './components/Detail';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Home />
            </>}>
          </Route>

          <Route path='/detail/:id' element={
            <>
              <Header />
              <Detail />
            </>}>
          </Route>

          <Route path='/login' element={
            <>
              <Header />
              <Login />
            </>}>
          </Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
