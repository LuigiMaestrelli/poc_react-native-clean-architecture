import { Todo } from '~/domain/models/general/todo';

export interface ITodoUseCase {
  findAll(): Promise<Todo[]>;
}
