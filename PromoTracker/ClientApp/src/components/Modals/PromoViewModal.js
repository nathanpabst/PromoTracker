import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap';
import Moment from 'react-moment';

class PromoViewModal extends Component {
    render() {
        return (

            <Modal show={this.props.show} onHide={this.props.hide}>
                <ModalHeader closeButton>
                    <ModalTitle>{this.props.promo.name}</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <p>Start Date: <Moment format="MM/DD/YYYY">{this.props.promo.start}</Moment> </p>
                    <br />
                    <p>End Date: <Moment format="MM/DD/YYYY">{this.props.promo.end}</Moment></p> <br />
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
