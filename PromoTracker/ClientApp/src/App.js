import React, { Component } from 'react';
import { Route } from 'react-router';
import Navbar from './components/Navbar/Navbar';

class App extends React.Component {
  displayName = App.name

  render() {
    return (
        <div className="App">
            <Route>
                <div>
                    <Navbar />
                </div>
            </Route>
        </div>
    );
  }
}

export default App;