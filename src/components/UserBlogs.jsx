import React, { useState } from 'react';
import { } from '@mui/material';
import axios from 'axios';
import Blog from './Blog';

function UserBlogs() {
    const [blogs, setBlogs] = useState();
    const id = localStorage.getItem("userID");

    async function sendRequest() {
        const res = await axios.get(`http://localhost:5000/api/blog/user/${id}`)
            .catch(err => console.log(err))
        const data = await res.data;
        return data;
    }
    useEffect(() => {
        sendRequest()
            .then((data) => setBlogs(data.user.blogs))
    }, [])
    console.log(blogs);
    return (
        <div>UserBlogs</div>
    )
}

export default UserBlogs;