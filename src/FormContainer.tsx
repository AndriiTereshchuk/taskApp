import React, { useEffect } from "react";

import Form from './Form';
import { useAddTaskMutation, useUpdateTaskMutation } from './apollo/autogenerate/hooks';

const FormContainer = (props: { updateTasks: () => void, task: { id: string, title: string, description: string } | null }) => {
    const [addTask] = useAddTaskMutation();
    const [updateTask] = useUpdateTaskMutation();
    const onSubmit = (data: { id?: string, title: string, description: string }) => {
        if (data.id) {
            updateTask({
                variables: {
                    id: data.id,
                    title: data.title,
                    description: data.description,
                }
            }).then(props.updateTasks);
            return;
        }
        addTask({
            variables: {
                title: data.title,
                description: data.description,
            }
        }).then(props.updateTasks)
    };

    useEffect(() => {
    }, [props.task])

    return <Form task={props.task} onSubmit={onSubmit} />
}

export default FormContainer;
