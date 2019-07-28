import React from 'react';
import './Components/Home.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Components/Home.jsx';
import About from './Components/About';
import ClientForm from './Components/ClientForm';
import CustomNavbar from './Components/CustomNavbar';

function App() {
  return (
        <Router>
          <div>
            <CustomNavbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/clientform" component={ClientForm} />
          </div>
        </Router>
  );
}

export default App;
