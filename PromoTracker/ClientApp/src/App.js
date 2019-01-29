import React, { Component } from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Admin from './components/Admin/Admin';
import IngramSpark from './components/IngramSpark/IngramSpark';
import SparkReporting from './components/Reporting/SparkReporting';

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
                        <Route path="/ingramspark" exact component={IngramSpark} />
                        <Route path="/sparkReporting" exact component={SparkReporting} />
                        
                    </Switch>
                </div>

            </BrowserRouter>
        </div>
    );
  }
}

export default App;