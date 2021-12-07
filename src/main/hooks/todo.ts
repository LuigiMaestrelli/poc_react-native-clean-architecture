import { ITodoUseCase } from '~/domain/usecases/general/todo/todoUseCase';
import { getTodoUseCase } from '../factories/usecases/todo/todoUseCase';

export function useTodoUseCase(): ITodoUseCase {
  return getTodoUseCase();
}
