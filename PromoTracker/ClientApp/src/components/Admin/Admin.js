import React from 'react';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter, ModalTitle, Table } from 'react-bootstrap';
//import SinglePromo from './../Promotions/SinglePromo';
import PromoRequests from './../Requests/PromoRequests';


import './Admin.css';

class Admin extends React.Component {
    constructor(props, context) {
        super(props, context);


        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.getPromos = this.getPromos.bind(this);
        this.handleDelete = this.getPromos.bind(this);

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

    handleNameChange = (e) => {
        const addPromo = { ...this.state.addPromo };
        addPromo.name = e.target.value;
        this.setState({ addPromo });
    };

    handleStartChange = (e) => {
        const addPromo = { ...this.state.addPromo };
        addPromo.start = e.target.value;
        this.setState({ addPromo });
    }

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

    handleDelete(e) {
        console.log('e', e);
        const promoId = this.state.id;
        return new Promise((resolve, reject) => {
            PromoRequests.deletePromo(promoId)
                .then(response => {
                    alert('this code is no mas.');
                    resolve(response);
                })
                .catch(error => reject(error));
        });
    };


    render() {

        const addPromo = this.state.addPromo;
        const { promos } = this.state;

        const promoComponents = promos.map((promo) => (
            <div key={promo.id}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Start Date</th>
                            <th>End Date </th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Restrictions</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{promo.name}</td>
                            <td>{promo.start}</td>
                            <td>{promo.end}</td>
                            <td>{promo.desc}</td>
                            <td>{promo.category}</td>
                            <td>{promo.restrictions}</td>
                            <td>
                                <Button>Edit</Button>
                            </td>
                            <td>
                                <Button onClick={() => this.handleDelete}>Delete</Button>
                            </td>

                        </tr>
                    </tbody>
                </Table>
            </div>


        ));

        return (
            <div>
                <div>
                    <h1>Admin</h1>
                </div>

                <Button onClick={this.handleShow}>Add Promotion</Button>

                <div className="promotions">
                    <div className="panel panel-primary">
                        <div className="panel-heading">Active Promotions</div>
                        <div className="panel-body">
                            <ul className="promoComponents">{promoComponents}</ul>
                        </div>
                    </div>
                </div>

                <div>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <ModalHeader closeButton>
                            <ModalTitle className="text-center">Add Promotion</ModalTitle>
                        </ModalHeader>
                        <ModalBody>
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
                            onChange={this.handleStartChange}
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
                        </ModalBody>
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
