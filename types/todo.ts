export interface Todo {
  id: number
  title: string
}
export interface EditTodoPayload {
  todoId: number;
  newTitle: string;
}
