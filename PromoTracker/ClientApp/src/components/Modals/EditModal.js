import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, DatePicker } from 'react-bootstrap';
import * as moment from 'moment';

class EditModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            promo: props.promo
        };

    }
    
    handleNameChange = (e) => {
        const addPromo = { ...this.state.promo };
        addPromo.name = e.target.value;
        this.setState({ promo: addPromo });
    }

    handleStartChange = (e) => {
        const addPromo = { ...this.state.promo };
        addPromo.start = e.target.value;
        this.setState({ promo: addPromo });
    };

    handleEndChange = (e) => {
        const addPromo = { ...this.state.promo };
        addPromo.end = e.target.value;
        this.setState({ promo: addPromo });
    };

    handleDescChange = (e) => {
        const addPromo = { ...this.state.promo };
        addPromo.desc = e.target.value;
        this.setState({ promo: addPromo });
    };

    handleCategoryChange = (e) => {
        const addPromo = { ...this.state.promo };
        addPromo.category = e.target.value;
        this.setState({ promo: addPromo });
    };

    handleRestrictionChange = (e) => {
        const addPromo = { ...this.state.promo };
        addPromo.restrictions = e.target.value;
        this.setState({ promo: addPromo });
    };

    render() {
        const { promo } = this.state;
        promo.start = moment(promo.start).format("YYYY-MM-DD");
        promo.end = moment(promo.end).format("YYYY-MM-DD");

        return (

            <Modal show={this.props.show} onHide={this.props.hide}>
                <ModalHeader closeButton>
                    <ModalTitle className="text-center">Update Details</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <label> Promotion Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={promo.name}
                        onChange={this.handleNameChange}
                    />
                    <br />
                    <label> Start Date: </label>
                    <input
                        type="date"
                        name="start"
                        value={promo.start}
                        onChange={this.handleStartChange}

                    />
                    <br />
                    <label> End Date: </label>
                    <input
                        type="date"
                        name="end"
                        value={promo.end}
                        onChange={this.handleEndChange}

                    />
                    <br />
                    <label> Description: </label>
                    <input
                        type="text"
                        name="desc"
                        value={promo.desc}
                        onChange={this.handleDescChange}

                    />
                    <br />
                    <label> Category: </label>
                    <input
                        type="text"
                        name="category"
                        value={promo.category}
                        onChange={this.handleCategoryChange}

                    />
                    <br />
                    <label> Restrictions: </label>
                    <input
                        type="text"
                        name="restrictions"
                        value={promo.restrictions}
                        onChange={this.handleRestrictionChange}

                    />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => this.props.save(promo.id, promo)}>Save</Button>
                    <Button onClick={this.props.hide}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default EditModal; 