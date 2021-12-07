import { TodoUseCase } from '~/application/useCases/todo/todoUseCase';
import { ITodoUseCase } from '~/domain/usecases/general/todo/todoUseCase';
import { getTodoApiClient } from '../../infra/todo/todoApiClient';

const todoApiClient = getTodoApiClient();
const todoUseCase = new TodoUseCase(todoApiClient);

export function getTodoUseCase(): ITodoUseCase {
  return todoUseCase;
}
