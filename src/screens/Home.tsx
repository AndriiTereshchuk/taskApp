import React, { useState } from 'react';

import FormContainer from '../components/FormContainer';
import TaskList from '../components/TaskList';
import { useTasksQuery } from '../apollo/autogenerate/hooks';
import { Task } from '../types/Task';

const Home = () => {
    const { data, refetch: refetchTasks } = useTasksQuery();
    const [task, setTask] = useState<null| Task>(null)
    return(
        <div className="App">
            <FormContainer
                updateTasks={refetchTasks}
                task={task}
                clearTask={setTask}
            />
            <TaskList
                editTask={setTask}
                tasks={data && data.tasks  || []}
                updateTasks={refetchTasks}
            />
        </div>
    )
}

export default Home;
