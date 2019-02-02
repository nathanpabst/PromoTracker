import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap';

class PromoViewModal extends Component {
    render() {
        return (

            <Modal show={this.props.show} onHide={this.props.hide}>
                <ModalHeader closeButton>
                    <ModalTitle>{this.props.promo.name}</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <p>Start Date: {this.props.promo.start}</p>
                    <br />
                    <p>End Date: {this.props.promo.end}</p> <br />
                    <p>Description: {this.props.promo.desc}</p> <br />
                    <p>Restrictions: {this.props.promo.restrictions}</p> <br />
                    <p>Category: {this.props.promo.category}</p>

                </ModalBody>
                <ModalFooter>
                    <Button variant="secondary" onClick={this.props.hide}>Close</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default PromoViewModal; 
