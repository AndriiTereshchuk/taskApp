import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TaskForm = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const onChangeTitle = e => {
        setTitle(e.target.value);
    }
    const onChangeDescription = e => {
        setDescription(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (props.task &&  props.onSubmit) {
            props.onSubmit({
                id: props.task.id,
                title,
                description,
            });
        }
        if (props.onSubmit && !props.task) {
            props.onSubmit({
                title,
                description,
            });
        }
        setTitle('');
        setDescription('')
    }

    useEffect(() => {
        if (props.task) {
            setTitle(props.task.title)
            setDescription(props.task.description);
        }
    }, [props.task])

    return(
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={onChangeTitle}
                />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="description"
                    rows={3}
                    value={description}
                    onChange={onChangeDescription}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default TaskForm;