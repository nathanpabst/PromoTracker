import React, { Component } from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Admin from './components/Admin/Admin';

class App extends Component {
  //displayName = App.name

  render() {
    return (
        <div >
            <BrowserRouter>
                <div>
                    <NavBar />
                
                    <Switch>
                
                        <Route path="/admin" exact component={Admin} />
                        
                    </Switch>
                </div>







            </BrowserRouter>
        </div>
    );
  }
}

export default App;