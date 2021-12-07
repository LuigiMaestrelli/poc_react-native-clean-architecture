import { IApiClient } from '~/application/protocols/apiClient';
import { ITodoApiClient } from '~/application/protocols/todo/todoApiClient';
import { Todo } from '~/domain/models/general/todo';

export class TodoApiClient implements ITodoApiClient {
  constructor(private readonly apiClient: IApiClient) {}

  findAll = async (): Promise<Todo[]> => {
    const { data } = await this.apiClient.get<Todo[]>('todos/');
    return data;
  };
}
