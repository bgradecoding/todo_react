export type TodoResult = {
  id: number;
  email: string;
  todoname: string;
  todostatus: string;
  tododate: string;
};

export type TodoState = {
  todo: TodoResult[];
};
