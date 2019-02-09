import React from 'react';
import { Button, Table } from 'react-bootstrap';
import AddModal from './../Modals/AddModal';
import PromoRequests from './../Requests/PromoRequests';

import './Admin.css';
import EditModal from '../Modals/EditModal';

class Admin extends React.Component {
    constructor(props, context) {
        super(props, context);


        this.openAddModal = this.openAddModal.bind(this);
        this.closeAddModal = this.closeAddModal.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.getPromos = this.getPromos.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.openEditModal = this.openEditModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        
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
            updatePromo: {
                
            },
            isAddModalOpen: false,
            isEditModalOpen: false
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

    openAddModal() {
        this.setState({ isAddModalOpen: true });
    }

    openEditModal(promo) {
        this.setState({ isEditModalOpen: true, updatePromo: promo });
    }

    closeAddModal() {
        this.setState({ isAddModalOpen: false });
    }

    closeEditModal() {
        this.setState({ isEditModalOpen: false });
    }

    clearInput() {
        this.setState({ addPromo: "" });
    }

    handleAdd(promo) {
        PromoRequests
            .newPromo(promo)
            .then(() => {
                alert("Updated!");               
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
                this.closeAddModal();
                this.getPromos();
                this.clearInput();
            })
            .catch((error) => {
                console.error(error, "error adding promotion");
            });
    }

    handleUpdate(id, promo) {
        PromoRequests
            .updatePromo(id, promo)
            .then(() => {
                alert("Updated!");               
                this.closeEditModal();
                this.getPromos();
            })
            .catch((error) => {
                console.error(error, "error updating promotion");
            });
    }

    handleDelete(promo) {
        return new Promise((resolve, reject) => {
            PromoRequests.deletePromo(promo.id)
                .then(response => {
                    alert('this code is no mas.');
                    resolve(response);
                    this.getPromos();
                })
                .catch(error => reject(error));
        });
    }

    render() {

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
                    <Button id={promo.id} onClick={() => this.openEditModal(promo)}>Edit</Button>
                </td>
                <td>
                    <Button onClick={() => this.handleDelete(promo)}>Delete</Button>
                </td>

            </tr>
        ));
        const editModal = this.state.isEditModalOpen &&
            (<EditModal
                show={this.state.isEditModalOpen}
                hide={this.closeEditModal}
                save={this.handleUpdate}
                promo={this.state.updatePromo}
            />);

        return (
            <div>
                
                <Button onClick={this.openAddModal}>Add Promotion</Button>

                <AddModal
                    show={this.state.isAddModalOpen}
                    hide={this.closeAddModal}
                    save={this.handleAdd}
                    promo={this.state.addPromo}
                />

                {editModal}

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
