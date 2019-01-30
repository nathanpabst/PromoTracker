import React, { Component } from 'react';
import PromoRequests from './../Requests/PromoRequests';
import Search from './../Search/Search';

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

        const promoComponents = promos.map((promo) => {
            console.log(promo);
            
        });

        return (
            <div className="spark">
                <h1>Active Promotion Codes</h1>
            
            <div className="search">
                <Search />
            </div>

            <div className="" key={promos.id}>
                <table className="table table-bordered table-striped">
                    <tbody>
                        <tr>
                            <td>{promoComponents}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>



        );
    }

}

export default IngramSpark;