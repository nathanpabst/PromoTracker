import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap';

class AddUpdateModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            promo: []

        }
    }
    componentDidMount() {

        this.setState({ promo: this.props.promo });
    }

    handleNameChange = (e) => {
        const addPromo = { ...this.state.promo };
        addPromo.name = e.target.value;
        this.setState({ promo: addPromo });
    };

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


        return (

            <Modal show={this.props.show} onHide={this.props.hide}>
                <ModalHeader closeButton>
                    <ModalTitle className="text-center">Add Promotion</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <label> Promotion Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.promo.name}
                        onChange={this.handleNameChange}
                    />
                    <br />
                    <label> Start Date: </label>
                    <input
                        type="date"
                        name="start"
                        value={this.state.promo.start}
                        onChange={this.handleStartChange}

                    />
                    <br />
                    <label> End Date: </label>
                    <input
                        type="date"
                        name="end"
                        value={this.state.promo.end}
                        onChange={this.handleEndChange}

                    />
                    <br />
                    <label> Description: </label>
                    <input
                        type="text"
                        name="desc"
                        value={this.state.promo.desc}
                        onChange={this.handleDescChange}

                    />
                    <br />
                    <label> Category: </label>
                    <input
                        type="text"
                        name="category"
                        value={this.state.promo.category}
                        onChange={this.handleCategoryChange}

                    />
                    <br />
                    <label> Restrictions: </label>
                    <input
                        type="text"
                        name="restrictions"
                        value={this.state.promo.restrictions}
                        onChange={this.handleRestrictionChange}

                    />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => this.props.save(this.state.promo)}>Save</Button>
                    <Button onClick={this.props.hide}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default AddUpdateModal; 
