import React  from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useRemoveTaskMutation } from './apollo/autogenerate/hooks';

const TaskList = (props) => {
    const [removeTask] = useRemoveTaskMutation()
    if (!props.tasks) {
        return null
    }
    return props.tasks.map((task) => (
        <Card key={task.id}>
            <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                <Card.Text>{task.description}</Card.Text>
                <Button
                    variant="primary"
                    onClick={() => {
                        removeTask({
                            variables: {
                                id: task.id,
                            }
                        }).then(props.updateTasks)
                    }}
                >
                    Done
                </Button>
                <Button
                    onClick={() => props.editTask(task)}
                >
                    Edit
                </Button>
            </Card.Body>
        </Card>
    ));
}

export default TaskList;
