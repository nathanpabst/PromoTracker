import React from 'react';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter, ModalTitle, Table } from 'react-bootstrap';
import AddUpdateModal from './../Modals/AddUpdateModal';
import PromoRequests from './../Requests/PromoRequests';

import './Admin.css';

class Admin extends React.Component {
    constructor(props, context) {
        super(props, context);


        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.getPromos = this.getPromos.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

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
            isModalOpen: false
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

    openModal() {
        this.setState({ isModalOpen: true });
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }

    handleAdd(promo) {
        PromoRequests
            .newPromo(promo)
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
                this.closeModal();
                this.getPromotions();
            })
            .catch((error) => {
                console.error(error, "error adding promotion");
            });
    }

    handleDelete(promo) {
        return new Promise((resolve, reject) => {
            PromoRequests.deletePromo(promo.id)
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
                        <tr key={promo.id}>
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
                                <Button onClick={() => this.handleDelete(promo)}>Delete</Button>
                            </td>

                        </tr>
         ));

        return (
            <div>
                <div>
                    <h1>Admin</h1>
                </div>

                <Button onClick={this.openModal}>Add Promotion</Button>

                <AddUpdateModal
                    show={this.state.isModalOpen}
                    hide={this.closeModal}
                    save={this.handleAdd}
                    promo={this.state.addPromo}
                />

                <div className="promotions">
                    <div className="panel panel-primary">
                        <div className="panel-heading">Active Promotions</div>
                        <div className="panel-body">
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Start Date</th>
                                        <th>Expiration Date</th>
                                        <th>Description</th>
                                        <th>Category</th>
                                        <th>Restrictions</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {promoComponents}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>               
            </div>
        );
    }
}

export default Admin;
