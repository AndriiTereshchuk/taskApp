// @ts-ignore
import * as Types from "./operations";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

export const AddTaskDocument = gql`
  mutation AddTask($title: String!, $description: String!) {
    addTask(title: $title, description: $description) {
      id
      title
      description
      created_at
      updated_at
    }
  }
`;
export type AddTaskMutationFn = Apollo.MutationFunction<
  Types.AddTaskMutation,
  Types.AddTaskMutationVariables
>;

/**
 * __useAddTaskMutation__
 *
 * To run a mutation, you first call `useAddTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTaskMutation, { data, loading, error }] = useAddTaskMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useAddTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AddTaskMutation,
    Types.AddTaskMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.AddTaskMutation,
    Types.AddTaskMutationVariables
  >(AddTaskDocument, baseOptions);
}
export type AddTaskMutationHookResult = ReturnType<typeof useAddTaskMutation>;
export type AddTaskMutationResult = Apollo.MutationResult<Types.AddTaskMutation>;
export type AddTaskMutationOptions = Apollo.BaseMutationOptions<
  Types.AddTaskMutation,
  Types.AddTaskMutationVariables
>;
export const RemoveTaskDocument = gql`
  mutation RemoveTask($id: String!) {
    removeTask(id: $id) {
      id
      title
      description
      created_at
      updated_at
    }
  }
`;
export type RemoveTaskMutationFn = Apollo.MutationFunction<
  Types.RemoveTaskMutation,
  Types.RemoveTaskMutationVariables
>;

/**
 * __useRemoveTaskMutation__
 *
 * To run a mutation, you first call `useRemoveTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTaskMutation, { data, loading, error }] = useRemoveTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.RemoveTaskMutation,
    Types.RemoveTaskMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.RemoveTaskMutation,
    Types.RemoveTaskMutationVariables
  >(RemoveTaskDocument, baseOptions);
}
export type RemoveTaskMutationHookResult = ReturnType<
  typeof useRemoveTaskMutation
>;
export type RemoveTaskMutationResult = Apollo.MutationResult<Types.RemoveTaskMutation>;
export type RemoveTaskMutationOptions = Apollo.BaseMutationOptions<
  Types.RemoveTaskMutation,
  Types.RemoveTaskMutationVariables
>;
export const TaskDocument = gql`
  query Task($id: String!) {
    task(id: $id) {
      id
      title
      description
      created_at
      updated_at
    }
  }
`;

/**
 * __useTaskQuery__
 *
 * To run a query within a React component, call `useTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTaskQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.TaskQuery,
    Types.TaskQueryVariables
  >
) {
  return Apollo.useQuery<Types.TaskQuery, Types.TaskQueryVariables>(
    TaskDocument,
    baseOptions
  );
}
export function useTaskLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.TaskQuery,
    Types.TaskQueryVariables
  >
) {
  return Apollo.useLazyQuery<Types.TaskQuery, Types.TaskQueryVariables>(
    TaskDocument,
    baseOptions
  );
}
export type TaskQueryHookResult = ReturnType<typeof useTaskQuery>;
export type TaskLazyQueryHookResult = ReturnType<typeof useTaskLazyQuery>;
export type TaskQueryResult = Apollo.QueryResult<
  Types.TaskQuery,
  Types.TaskQueryVariables
>;
export const TasksDocument = gql`
  query Tasks {
    tasks {
      id
      title
      description
      created_at
      updated_at
    }
  }
`;

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useTasksQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.TasksQuery,
    Types.TasksQueryVariables
  >
) {
  return Apollo.useQuery<Types.TasksQuery, Types.TasksQueryVariables>(
    TasksDocument,
    baseOptions
  );
}
export function useTasksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.TasksQuery,
    Types.TasksQueryVariables
  >
) {
  return Apollo.useLazyQuery<Types.TasksQuery, Types.TasksQueryVariables>(
    TasksDocument,
    baseOptions
  );
}
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksQueryResult = Apollo.QueryResult<
  Types.TasksQuery,
  Types.TasksQueryVariables
>;
export const UpdateTaskDocument = gql`
  mutation UpdateTask($id: String!, $title: String!, $description: String!) {
    updateTask(id: $id, title: $title, description: $description) {
      id
      title
      description
      created_at
      updated_at
    }
  }
`;
export type UpdateTaskMutationFn = Apollo.MutationFunction<
  Types.UpdateTaskMutation,
  Types.UpdateTaskMutationVariables
>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateTaskMutation,
    Types.UpdateTaskMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.UpdateTaskMutation,
    Types.UpdateTaskMutationVariables
  >(UpdateTaskDocument, baseOptions);
}
export type UpdateTaskMutationHookResult = ReturnType<
  typeof useUpdateTaskMutation
>;
export type UpdateTaskMutationResult = Apollo.MutationResult<Types.UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateTaskMutation,
  Types.UpdateTaskMutationVariables
>;
