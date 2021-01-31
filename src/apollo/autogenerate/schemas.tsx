export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Taks = {
  __typename?: "Taks";
  id: Scalars["String"];
  title: Scalars["String"];
  description: Scalars["String"];
  created_at: Scalars["String"];
  updated_at: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  task: Taks;
  tasks: Array<Taks>;
};

export type QueryTaskArgs = {
  id: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  addTask: Taks;
  updateTask: Taks;
  removeTask: Taks;
};

export type MutationAddTaskArgs = {
  title: Scalars["String"];
  description: Scalars["String"];
};

export type MutationUpdateTaskArgs = {
  id: Scalars["String"];
  title: Scalars["String"];
  description: Scalars["String"];
};

export type MutationRemoveTaskArgs = {
  id: Scalars["String"];
};
