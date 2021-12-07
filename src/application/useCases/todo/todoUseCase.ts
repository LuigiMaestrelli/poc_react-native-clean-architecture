import { ITodoApiClient } from '~/application/protocols/todo/todoApiClient';
import { Todo } from '~/domain/models/general/todo';
import { ITodoUseCase } from '~/domain/usecases/general/todo/todoUseCase';

export class TodoUseCase implements ITodoUseCase {
  constructor(private readonly todoApiClient: ITodoApiClient) {}

  findAll = async (): Promise<Todo[]> => {
    return await this.todoApiClient.findAll();
  };
}
