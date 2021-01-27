import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import resume from '../assets/JVlieg_Resume.pdf'
import Home from './Home'

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/resume" component={Resume}/>
          </Switch>
        </div> 
      </BrowserRouter>
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