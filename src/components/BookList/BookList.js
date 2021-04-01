import React from 'react';

const BookList = (props) => {
    const { name, price, author } = props.books;

    const deleteBook = (id) => {
        fetch(`http://localhost:5000/deleteBook/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id)
        })
        .then(res => res.json())
        .then(res =>  console.log(res))
    }
    
    return (
        <tr>
            <td>{name}</td>
            <td>{author}</td>
            <td>{price}</td>
            <td><button onClick={() => deleteBook(props.books._id)} className="btn btn-warning">Delete</button></td>
        </tr>
    );
};

export default BookList;