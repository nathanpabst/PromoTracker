import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Admin from './components/Admin/Admin';
import BookSpark from './components/BookSpark/BookSpark';
import SparkReporting from './components/Reporting/SparkReporting';
import Search from './components/Search/Search';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faHome);


class App extends Component {
    //displayName = App.name

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <NavBar />
                        <div className="container">
                            <div className="row">

                                <Switch>
                                    <Route path="/admin" exact component={Admin} />
                                    <Route path="/bookSpark" exact component={BookSpark} />
                                    <Route path="/sparkReporting" exact component={SparkReporting} />
                                    <Route path="/search" exact component={Search} />

                                </Switch>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>

        );
    }
}

export default App;