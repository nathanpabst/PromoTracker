import React, { Component } from 'react';
import PromoRequests from './../Requests/PromoRequests';
import Search from './../Search/Search';
import { Table, Button } from 'react-bootstrap';

import './IngramSpark.css';

class IngramSpark extends Component {
    state = {
        promos: []
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

    return(
        <div className = "spark" >
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