import * as Types from "./schemas";

export type AddTaskMutationVariables = Types.Exact<{
  title: Types.Scalars["String"];
  description: Types.Scalars["String"];
}>;

export type AddTaskMutation = { __typename?: "Mutation" } & {
  addTask: { __typename?: "Taks" } & Pick<
    Types.Taks,
    "id" | "title" | "description" | "created_at" | "updated_at"
  >;
};

export type RemoveTaskMutationVariables = Types.Exact<{
  id: Types.Scalars["String"];
}>;

export type RemoveTaskMutation = { __typename?: "Mutation" } & {
  removeTask: { __typename?: "Taks" } & Pick<
    Types.Taks,
    "id" | "title" | "description" | "created_at" | "updated_at"
  >;
};

export type TaskQueryVariables = Types.Exact<{
  id: Types.Scalars["String"];
}>;

export type TaskQuery = { __typename?: "Query" } & {
  task: { __typename?: "Taks" } & Pick<
    Types.Taks,
    "id" | "title" | "description" | "created_at" | "updated_at"
  >;
};

export type TasksQueryVariables = Types.Exact<{ [key: string]: never }>;

export type TasksQuery = { __typename?: "Query" } & {
  tasks: Array<
    { __typename?: "Taks" } & Pick<
      Types.Taks,
      "id" | "title" | "description" | "created_at" | "updated_at"
    >
  >;
};

export type UpdateTaskMutationVariables = Types.Exact<{
  id: Types.Scalars["String"];
  title: Types.Scalars["String"];
  description: Types.Scalars["String"];
}>;

export type UpdateTaskMutation = { __typename?: "Mutation" } & {
  updateTask: { __typename?: "Taks" } & Pick<
    Types.Taks,
    "id" | "title" | "description" | "created_at" | "updated_at"
  >;
};
