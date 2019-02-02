import React, { Component } from 'react';
import PromoRequests from './../Requests/PromoRequests';
import Search from './../Search/Search';
import PromoViewModal from './../Modals/PromoViewModal';
import { Table, Button, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap';

import './IngramSpark.css';

class IngramSpark extends Component {
    constructor(props) {
        super(props);

        this.state = {
            promos: [],
            isModalOpen: false,
            singlePromo: {}
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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

    render() {
        const { promos } = this.state;

        const promoComponents = promos.map((promo) => (
            <tr key={promo.id}>
                <td>{promo.name}</td>
                <td>{promo.end}</td>
                <td>
                    <Button
                        variant="primary"
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

                <div className="search">
                    <Search />
                </div>

                <div className="promotions">
                    <div className="panel panel-primary">
                        <div className="panel-heading">Active Promotions</div>
                        <div className="panel-body">
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
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

export default IngramSpark;