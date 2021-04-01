import './AllBooks.css';
import React from 'react';
import { useEffect, useState } from 'react';
import BookList from '../BookList/BookList';

const AllBooks = () => {

    const [books, setbooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setbooks(data))
    }, [])
    return (
        <div>
            <h1>All books here</h1>
            <div className="table-div">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Book Name</th>
                            <th scope="col">Author Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map(books => <BookList key={books._id} books={books}> </BookList>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBooks;