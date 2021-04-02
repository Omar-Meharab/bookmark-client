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
            {
                orders.map(book => <li key={book._id}>{book.name}</li>)
            }
        </div>
    );
};

export default Bookings;