import { Todo } from '~/domain/models/general/todo';

export interface ITodoApiClient {
  findAll(): Promise<Todo[]>;
}
