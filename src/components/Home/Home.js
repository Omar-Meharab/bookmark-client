import './Home.css';
import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';

const Home = () => {
    const [books, setbooks] = useState([]);

    useEffect(() => {
        fetch('https://dry-castle-85178.herokuapp.com/books')
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