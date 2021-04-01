import './Home.css';
import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';

const Home = () => {
    const [books, setbooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => setbooks(data))
    }, [])

    return (
        <div>
            <h1>Welcome to Bookmark. All your books in one place.</h1>
            <div className="row">
            {
                books.map(books =><Books key={books._id} books={books}></Books>)
            }
            </div>
        </div>
    );
};

export default Home;