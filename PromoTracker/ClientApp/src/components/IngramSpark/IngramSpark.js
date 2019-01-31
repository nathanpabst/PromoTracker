import React, { Component } from 'react';
import PromoRequests from './../Requests/PromoRequests';
import Search from './../Search/Search';
import { Table, Button, Modal, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap';

import './IngramSpark.css';

class IngramSpark extends Component {
    state = {
        promos: [],
        modalIsOpen: false
    };

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

    toggleModal() {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        });
    }

    render() {
        const { promos } = this.state;

        const promoComponents = promos.map((promo) => (
            < div key = {promo.id} >
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
                                <Button variant="primary" size="sm">
                                    View
                                </Button>
                            </td>                              
                        </tr>
                    </tbody>
                </Table>
            </div>
                    
         ));

        return (
            <div className="spark" >

            <Modal.Dialog isOpen={this.state.modalIsOpen}>
                <Modal.Header toggle={!this.toggleModal.bind(this)} closeButton>
                    <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Modal body text</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.toggleModal.bind(this)}>Close</Button>
                </Modal.Footer>
                </Modal.Dialog>


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