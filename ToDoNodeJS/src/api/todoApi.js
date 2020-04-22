import BaseApi from './baseApi';

class TodoApi extends BaseApi {
  addTodo = ({ params }) => {
    return this.client.post(`/createTodo`, params)
  }

  getTodoList = ({ params }) => {
    return this.client.post(`/todos`, params)
  }
}

export const TodoApi = new TodoApi();
