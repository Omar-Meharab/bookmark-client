import './AddBooks.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddBooks = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const eventData = {
            name: data.name,
            author: data.author,
            price: data.price,
            imageURL: imageURL
        };
        const url = `http://localhost:5000/addBooks`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response', res));
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'd7b58dd4a615c2b48d8bd42eb97d1a8f');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div>
            <h1>Add Your Books</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="Book Name" ref={register} />
                <br />
                <input name="author" defaultValue="Author Name" ref={register} />
                <br />
                <input name="price" defaultValue="$Price" ref={register} />
                <br />
                <input className="btn btn-warning" name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddBooks;