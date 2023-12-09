import React, { useState } from 'react';

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
    return (
        <div>AddBlog</div>
    )
}

export default AddBlog;