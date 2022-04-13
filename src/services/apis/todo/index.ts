import { socialApiClient, authHeader } from "../client";
import { TodoResult } from "type/todo";
import { deleteTodo } from "data/todo/actions";

const api = {
  async getTodos() {
    try {
      console.log(authHeader);
      const res: any = await socialApiClient.get("/todo/todo", authHeader);
      return res.data;
    } catch (e: any) {
      throw Error(e.message);
    }
  },

  async updateTodo(todoParam: Partial<TodoResult>) {
    try {
      const res = await socialApiClient.put(
        "/todo/todo",
        todoParam,
        authHeader
      );
      return res.data;
    } catch (e: any) {
      throw Error(e.message);
    }
  },
  async addTodo(todoName: string) {
    try {
      const res = await socialApiClient.post(
        "/todo/todo",
        { todoname: todoName },
        authHeader
      );
      return res.data;
    } catch (e: any) {
      throw Error(e.message);
    }
  },
  async deleteTodo(id: number) {
    try {
      const res = await socialApiClient.delete(`/todo/todo/${id}`, authHeader);
      return res.data;
    } catch (e: any) {
      throw Error(e.message);
    }
  },
};

export default api;
