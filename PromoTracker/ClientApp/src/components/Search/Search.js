import React, { Component } from 'react';

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
            <div className="row">
                <div className="input-group searchBar">
                    <input
                        type="text" className="form-control"
                        placeholder="Search for an existing promotion"
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                    />
                </div>
            </div>
            );
    }
}

export default Search;
