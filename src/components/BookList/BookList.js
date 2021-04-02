import React from 'react';

const BookList = (props) => {
    const { name, price, author } = props.books;

    const deleteBook = (id) => {
        fetch(`https://dry-castle-85178.herokuapp.com/deleteBook/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>  console.log('deleted'))
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