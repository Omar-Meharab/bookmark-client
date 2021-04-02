import React from 'react';

const Orders = () => {
    return (
        <div>
            <h1>this is orders</h1>
            <div className="table-div">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Buyer</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td>Otto</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Orders;