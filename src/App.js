import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './index.css';
// Pages import
import Home from './pages/Home'
import Error from './pages/Error'
import OneCountry from './pages/OneCountry'
// Component import
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/country/:name">
          <OneCountry />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;