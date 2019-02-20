import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';


import './Search.css';

class Search extends Component {
    state = {
        searchTerm: ''
    }

    handleInputChange = () => {
        this.props.onSearch(
            this.search.value,
        );
    }

    render() {
        return (
            <div className="row header-row">
                <div className="filter-container searchBar col-sm-3">
                    <input
                        type="text" 
                        className="form-control searchIcon"
                        placeholder="Filter"
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                    />                       
                </div>
            </div>
            );
    }
}

export default Search;
