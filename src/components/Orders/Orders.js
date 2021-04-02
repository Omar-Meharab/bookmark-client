import './Orders.css'
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Bookings = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://dry-castle-85178.herokuapp.com/orders?email='+loggedInUser.email, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
             }
        })
        .then(res => res.json())
        .then(data => setOrders(data));
    }, [])

    return (
        <div>
            <h3>You have: {orders.length} Orders</h3>
            <div className="table-container">
            <table className="order-table table">
            {
                orders.map(book =>
                <thead key={book._id}>
                    <tr>
                        <td>{loggedInUser.name}</td>
                        <td>{book.name}</td>
                        <td>{book.autor}</td>
                        <td>{book.price}</td>
                    </tr>
                </thead>
                )
            }
            </table>
            </div>
        </div>
    );
};

export default Bookings;