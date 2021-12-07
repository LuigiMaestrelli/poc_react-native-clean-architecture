import { ITodoApiClient } from '~/application/protocols/todo/todoApiClient';
import { Todo } from '~/domain/models/general/todo';

export class TodoApiClientStub implements ITodoApiClient {
  findAll = async (): Promise<Todo[]> => {
    return [{ id: 1, userId: 1, completed: false, title: 'Some todo' }];
  };
}

export const makeTodoApiClientStub = (): ITodoApiClient => {
  return new TodoApiClientStub();
};
