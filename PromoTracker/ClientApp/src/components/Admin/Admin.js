import React from 'react';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap';
import PromoRequests from './../Requests/PromoRequests';


import './Admin.css';

class Admin extends React.Component {
    constructor(props, context) {
        super(props, context);


        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.getPromos = this.getPromos.bind(this);

        this.state = {
            promos: [],
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
        this.getPromos();
    }

    getPromos() {
        PromoRequests
            .getPromos()
            .then(promos => {
                this.setState({
                    promos: promos.data
                });
            })
            .catch(error => console.log(error));
    }

    

        handleClose() {
            this.setState({ show: false });
        }

        handleShow() {
            this.setState({ show: true });
        }

    handleChangeName = e => {
        const addPromo = { ...this.state.addPromo };
        addPromo.name = e.target.value;
        this.setState({ addPromo });
    };

        handleAdd() {
            const promoObj = this.state.addPromo;
            PromoRequests
                .newPromo(promoObj)
                .then(() => {
                    alert("Added!");
                    this.setState({
                        addPromo: {
                            name: "",
                            start: "",
                            end: "",
                            desc: "",
                            category: "",
                            restrictions: ""
                        }
                    });
                    this.handleClose();
                    this.getPromotions();
                })
                .catch((error) => {
                    console.error(error, "error adding promotion");
                });
        }

    
    render() {

        const addPromo = this.state.addPromo;

        return (
            <div>
                <div>
                    <h1>Admin</h1>
                </div>
                <Button onClick={this.handleShow}>Add Promotion</Button>
                <div>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="text-center">Add Promotion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label> Promotion Name: </label>
                            <input
                                type="text"
                                name="name"
                                value={addPromo.name}
                                onChange={this.handleNameChange}
                            />
                            <br />
                            <label> Start Date: </label>
                            <input
                                type=""
                                name="start"
                                value={addPromo.start}
                                //onChange={}
                            />
                            <br />
                            <label> End Date: </label>
                            <input
                                type=""
                                name="end"
                                value={addPromo.end}
                                //onChange={}
                            />
                            <br />
                            <label> Description: </label>
                            <input
                                type="text"
                                name="desc"
                                value={addPromo.desc}
                                //onChange={}
                            />
                            <br />
                            <label> Category: </label>
                            <input
                                type="text"
                                name="category"
                                value={addPromo.category}
                                //onChange={}
                            />
                            <br />
                            <label> Restrictions: </label>
                            <input
                                type="text"
                                name="restrictions"
                                value={addPromo.restrictions}
                                //onChange={}
                            />
                        </Modal.Body>
                        <ModalFooter>
                            <Button onClick={this.handleAdd}>Save</Button>
                            <Button onClick={this.handleClose}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>

            );
        
    }
}

export default Admin;
