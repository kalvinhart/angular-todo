export interface Todo {
  text: string;
  completed: boolean;
}

export interface TodoWithId extends Todo {
  id: string;
}
