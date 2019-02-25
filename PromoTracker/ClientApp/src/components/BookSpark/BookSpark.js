import React, { Component } from 'react';
import PromoRequests from './../Requests/PromoRequests';
import PromoViewModal from './../Modals/PromoViewModal';
import Search from './../Search/Search';
import { Table, Button } from 'react-bootstrap';
import Moment from 'react-moment';
import FontAwesome from 'react-fontawesome';

import './BookSpark.css';


class BookSpark extends Component {
    constructor(props) {
        super(props);

        this.state = {
            promos: [],
            isModalOpen: false,
            searchTerm: '',
            singlePromo: {},
            sortedPromos: [],
            direction: {
                name: 'asc'
            }
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.sortBy = this.sortBy.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }

    componentDidMount() {
        PromoRequests
            .getPromos()
            .then(promos => {
                this.setState({
                    promos: promos.data
                });
            })
            .catch(error => console.log(error));
    }

    openModal(promo) {
        this.setState({ isModalOpen: true, singlePromo: promo });
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }

    sortBy(key) {
        //console.log(typeof key);
        //const { promos } = this.state;
        this.setState({
            sortedPromos: this.state.promos.sort((a, b) => (
                this.state.direction[key] === 'asc'
                    ? a[key] - b[key]
                    : b[key] - a[key]
            )),
            direction: {
                [key]: this.state.direction[key] === 'asc'
                    ? 'desc'
                    : 'asc'
            }
        });
    }

    searchHandler = (searchTerm) => {
        this.setState({
            searchTerm
        });
    }

    findMatches(input) {
        return function (x) {
            return x.name.toLowerCase().includes(input.toLowerCase()) || !input;
        };
    }

    render() {
        const { promos } = this.state;

        const promoComponents = promos.filter(this.findMatches(this.state.searchTerm)).map((promo) => (
            <tr key={promo.id}>
                <td>{promo.name}</td>
                <td><Moment format="MM/DD/YYYY">{promo.end}</Moment></td>
                <td>
                    <Button
                        bsStyle="primary"
                        size="sm"
                        value={promo.id}
                        onClick={() => this.openModal(promo)}
                    >
                        View
                    </Button>
                </td>
            </tr>
        ));

        return (
            <div className="spark" >

                <div className="promotions">

                    <h3 className="text-center">Available Promotions</h3>

                    <Search
                        onSearch={this.searchHandler}
                        searchTerm={this.state.searchTerm}
                    />

                    <div className="promo-table">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th> Name
                                            <span onClick={() => this.sortBy('name')}>
                                            <FontAwesome
                                                className="fas fa-sort sortIcon"
                                                name="sort"

                                            />
                                        </span>
                                    </th>
                                    <th>Expiration</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {promoComponents}
                            </tbody>
                        </Table>
                    </div>
                </div>

                <PromoViewModal
                    show={this.state.isModalOpen}
                    hide={this.closeModal}
                    promo={this.state.singlePromo}
                />

            </div>

        );
    }

}

export default BookSpark;