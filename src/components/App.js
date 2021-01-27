import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import resume from '../assets/JVlieg_Resume.pdf'
import Home from './Home'

class App extends Component {
  render() {
    return (      
       <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/resume" component={Resume}/>
          </Switch>
        </div> 
      </Router>
    );
  }
}

function Resume() {
  return (
    <div>
      { window.location = resume }
    </div>
  )
}

export default App;