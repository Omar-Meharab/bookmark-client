import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';


const CheckOut = () => {
    const { id } =useParams();
    const [book, setBook] = useState({});
    const history = useHistory();

    const handleOrder = () => {
        const order = {...loggedInUser, ...book};
        fetch('https://dry-castle-85178.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        history.push(`/orders`);
    }

    fetch(`https://dry-castle-85178.herokuapp.com/book/${id}`)
    .then(res => res.json())
    .then(data => setBook(data))

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <h1>Checkout Your Book</h1>
            <h2>Hello, {loggedInUser.name}! Your Book Is Here.</h2>
            <div className="table-div">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Buyer</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{loggedInUser.name}</td>
                        <td>{book.name}</td>
                        <td>{book.author}</td>
                        <td>{book.price}</td>
                        <td className="btn btn-primary" onClick={handleOrder}>Confirm Order</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default CheckOut;