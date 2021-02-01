import React, { useEffect } from 'react';

import Form from './Form';
import { useAddTaskMutation, useUpdateTaskMutation } from '../apollo/autogenerate/hooks';
import { Task } from '../types/Task';

type Props = {
    updateTasks: () => void;
    task: Task | null;
    clearTask: (task: null) => void;
}

const FormContainer = (props: Props) => {
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
            }).then(() => {
                props.clearTask(null);
                props.updateTasks()
            });
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
