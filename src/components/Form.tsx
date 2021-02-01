import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Task } from '../types/Task';
import './Form.css';

type Props = {
    task: Task | null;
    onSubmit<T extends { id?: string, title: string, description: string }>(data: T): void
}

const TaskForm = (props: Props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (!title || !description) return;
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
        <Form className="Form" onSubmit={onSubmit}>
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