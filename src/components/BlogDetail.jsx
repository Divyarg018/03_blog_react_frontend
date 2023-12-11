import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const labelStyle = { mb: 1, mt: 2, fontSize: '24px', fontWeight: 'bold' }
function BlogDetail(props) {
    const navigate = useNavigate();

    const [blog, setBlog] = useState();
    const id = useParams().id;
    console.log(id);
    const [inputs, setInputs] = useState();

    function handleChange(e) {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })
        );
    }

    async function fetchDetails() {
        const res = await axios
            .get(`http://localhost:5000/api/blog/${id}`)
            .catch(err => console.log(err))
        const data = await res.data;
        return data;
    }
    useEffect(() => {
        fetchDetails().then(data => {
            setBlog(data.blog)
            setInputs({ title: data.blog.title, description: data.blog.description })

        })

    }, [id]);
    
    async function sendRequest() {
        const res = await axios.put(`http://localhost:5000/api/blog/update/${id}`, {
            title: inputs.title,
            description: inputs.description
        }).catch(err => console.log(err))

        const data = await res.data;
        return data;
    }
    console.log(blog);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs);
        sendRequest()
            .then(data => console.log(data))
            .then(() => navigate("/myBlogs"))
    }
    return (
        <div>BlogDetail</div>
    )
}

export default BlogDetail;