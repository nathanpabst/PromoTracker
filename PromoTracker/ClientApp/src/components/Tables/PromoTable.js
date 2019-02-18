import React from 'react';
import { Table, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Moment from 'react-moment';




export default function PromoTable(props) {
    return (
        <Table striped bordered hover responsive={true}>
            <thead>
                <tr>
                    <th>
                        Name
                        <span>
                        <FontAwesome
                            className="fas fa-sort sortIcon"
                            name="sort"
                            onClick={() => props.sortBy('name')}
                            />
                        </span>

                    </th>
                    <th>Expiration</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(promo => (
                        <tr key="promo.id">
                            <td>{promo.name}</td>
                            <td><Moment format="MM/DD/YYYY">{promo.end}</Moment></td>
                            

                        </tr>
                    ))

                }
            </tbody>
        </Table>

    );
}

//export default PromoTable