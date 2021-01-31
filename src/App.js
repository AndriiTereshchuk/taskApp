import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import apolloClient from './apollo/apollo-client';

import FormContainer from './FormContainer';
import TaskList from './TaskList';
import { useTasksQuery } from "./apollo/autogenerate/hooks";

const MainContainer = () => {
    const { data, refetch: refetchTasks } = useTasksQuery();
    const [task, setTask] = useState(null)
    return(
        <div className="App">
            <FormContainer
                updateTasks={refetchTasks}
                task={task}
            />
            <TaskList
                editTask={setTask}
                tasks={data && data.tasks  || []}
                updateTasks={refetchTasks}
            />
        </div>
    )
}

function App() {
  return (
      <ApolloProvider client={apolloClient}>
          <MainContainer />
      </ApolloProvider>
  );
}

export default App;
