import React, { Component } from 'react';
import {Route , Link , Switch} from 'react-router-dom';
import India from './Container/India';
import World from './Container/World';
import HelpfulLinks from './HelpfulLinks';

import './App.css';

class App extends Component {
 render(){
  return (
    <div>
      <header className="header">
      <nav className="navbar navbar-expand-lg">
       <Link className="navbar-brand" to="/"><i className="fas fa-virus"></i> Covid-19 Tracker</Link>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <Link className="nav-item nav-link active" to="/">Home</Link>
      <Link className="nav-item nav-link" to="/world-stats">World Stats</Link>
      <Link className="nav-item nav-link" to="/covid19-detector">Covid-19 Detector</Link>
      <Link className="nav-item nav-link" to="/helpful-links">Helpful Links</Link>
      </div>
      </div>
      </nav>

      </header>
      
      <Route path='/' exact  component={India}/>
      <Switch>
      <Route path='/world-stats'  component={World}/>
      <Route path='/covid19-detector'  component={World}/>
      <Route path='/helpful-links'  component={HelpfulLinks}/>
      </Switch>
      <footer className="footer">
      <i className="fas fa-2x fa-virus"></i>
        <p>Covid-19 Tracker</p>
        <p>Made with <span role="img" aria-labelledby="heart">❤️</span> in India</p>
      </footer>
    </div>
  );
}
   
}

export default App;
