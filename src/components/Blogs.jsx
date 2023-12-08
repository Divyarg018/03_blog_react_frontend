import React from 'react';

function Blogs() {
    const [blogs, setBlogs] = useState();

    async function sendRequest() {
        const res = await axios
            .get("http://localhost:5000/api/blog")
            .catch(err => console.log(err))
        const data = await res.data;
        return data;
    }
    useEffect(() => {
        sendRequest()
            .then(data => setBlogs(data.blogs));
    }, []);
    console.log(blogs);
    return (
        <div>Blogs</div>
    )
}

export default Blogs;