import React, { Component } from 'react';
import PromoRequests from './../Requests/PromoRequests';
import PromoViewModal from './../Modals/PromoViewModal';
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
            singlePromo: {},
            sortedPromos: [],
            direction: {
                name: 'asc'
            }
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.sortBy = this.sortBy.bind(this);
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

    //sortAscending = () => {
    //    const { promos } = this.state;
    //    promos.sort((a, b) => a - b);
    //    this.setState({ promos });
    //}

    sortBy(key) {
        console.log(typeof key);
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

    render() {
        const { promos } = this.state;
       
        const promoComponents = promos.map((promo) => (               
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
                    <div className="panel panel-primary">
                        <div className="panel-heading">Active Promotions</div>
                        <div className="panel-body">
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