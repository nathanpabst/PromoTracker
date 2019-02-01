import React, { Component } from 'react';
import PromoRequests from './../Requests/PromoRequests';
import Search from './../Search/Search';
import { Table, Button, Modal, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap';

import './IngramSpark.css';

class IngramSpark extends Component {
    constructor(props) {
        super(props);

        this.state = {
            promos: [],
            isModalOpen: false
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

    openModal() {
        this.setState({ isModalOpen: true });
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }

    render() {
        const { promos } = this.state;

        const promoComponents = promos.map((promo) => (
            < div key={promo.id} >
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Expiration</th>
                            <th> Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{promo.name}</td>
                            <td>{promo.end}</td>
                            <td>
                                <Button variant="primary" size="sm" onClick={this.openModal}>
                                    View
                                </Button>
                            </td>
                        </tr>
                        <Modal show={this.state.isModalOpen} onHide={this.closeModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>{promo.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Start Date: {promo.start}</p>
                                <br />
                                <p>End Date: {promo.end}</p> <br />
                                <p>Description: {promo.desc}</p> <br />
                                <p>Restrictions: {promo.restrictions}</p> <br />
                                <p>Category: {promo.category}</p>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.closeModal}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </tbody>
                </Table>
            </div>

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
                            <ul className="promoComponents">{promoComponents}</ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default IngramSpark;