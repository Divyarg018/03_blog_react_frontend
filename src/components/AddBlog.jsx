import axios from 'axios';
import React, { useState } from 'react';

const labelStyle = { mb: 1, mt: 2, fontSize: '24px', fontWeight: 'bold' }
function AddBlog() {
    const [inputs, setInputs] = useState({
        title: "", description: "", imageURL: ""
    })

    function handleChange(e) {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })
        );
    }
    async function sendRequest() {
        const res = await axios.post(`http://localhost:5000/api/blog/add`, {
            title: inputs.title,
            description: inputs.description,
            image: inputs.imageURL,
            user: localStorage.getItem("userID")
        }).catch(err => console.log(err))
        const data = await res.data;
        return data;
    }
    return (
        <div>AddBlog</div>
    )
}

export default AddBlog;