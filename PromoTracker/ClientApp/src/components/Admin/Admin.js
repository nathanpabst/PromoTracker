import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import './Admin.css';

class Admin extends React.Component {
    constructor(props, context) {
        super(props, context);


        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAdd = this.handleAdd.bind(this);

        this.state = {
            promotions: [],
            addPromo: {
                name: "",
                start: "",
                end: "",
                desc: "",
                category: "",
                restrictions: ""
            },
            show: false
        };
    }

    componentDidMount() {

    }

    //    handleClose() {
    //        this.setState({ show: false });
    //    }

    //    handleShow() {
    //        this.setState({ show: true });
    //    }



    //    handleAdd() {
    //        this.setState({ show: true });
    //    }

    //render() {

    //    const addPromo = this.state.addPromo;

    //    return (
    //        <div>
    //            <div>
    //                <h1>Admin</h1>
    //            </div>
    //            <Button onClick={this.handleShow}>Add Promotion</Button>
    //            <div>
    //                <Modal show={this.state.show} onHide={this.handleClose}>
    //                    <Modal.Header closeButton>
    //                        <Modal.Title className="text-center">Add Promotion</Modal.Title>
    //                    </Modal.Header>
    //                    <Modal.Body>
    //                        <label> Promotion Name: </label>
    //                        <input
    //                            type="text"
    //                            name="name"
    //                            value={addPromo.name}
    //                            onChange={this.handleChangeName}
    //                        />
    //                        <br />
    //                        <label> 

    //        );
    //    }
    //}
}

export default Admin;
