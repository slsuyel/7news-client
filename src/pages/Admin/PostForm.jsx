import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useTitle from "../../Hooks/useTitle";

function PostForm() {
    useTitle("Post News")
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        author: "",
        date: "",
        image: "",
        content: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform data submission logic here
        console.log(formData);

        fetch('https://news-server-omega.vercel.app/postnews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });

        setFormData({
            title: "",
            category: "",
            author: "",
            date: "",
            image: "",
            content: ""
        });
    };

    return (
        <Container className="my-5">
            <h3 className="text-center"> Post Your news</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        required
                        value={formData.title}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="category">
                    <Form.Label>Category:</Form.Label>
                    <Form.Select
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <option value="">Select a category</option>
                        <option value="National">National</option>
                        <option value="International">International</option>
                        <option value="special_news">Special News</option>
                        <option value="Sports">Sports</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barishal">Barishal</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Education">Education</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Tech">Tech</option>
                        <option value="Feature">Feature</option>
                        <option value="sara-desh">Sara Desh</option>
                        <option value="sylhet">Sylhet</option>
                        <option value="panchagarh-news">Panchagarh News</option>
                        <option value="health">Health</option>
                        <option value="jobs">Jobs</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="video-gallery">Video Gallery</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="other">Other</option>
                        <option value="politics">Politics</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="author">
                    <Form.Label>Author:</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="date">
                    <Form.Label>Date:</Form.Label>
                    <Form.Control
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="image">
                    <Form.Label>Image:</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="content">
                    <Form.Label>Content:</Form.Label>
                    <ReactQuill
                        style={{ height: '120px' }}
                        value={formData.content}
                        onChange={(value) => handleChange({ target: { name: "content", value } })}
                    />
                </Form.Group>

                <Button variant="primary mt-5" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default PostForm;

