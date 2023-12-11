import React, { useState } from 'react';
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
    return (
        <div>BlogDetail</div>
    )
}

export default BlogDetail;