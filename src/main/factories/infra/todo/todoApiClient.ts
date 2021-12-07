import { ITodoApiClient } from '~/application/protocols/todo/todoApiClient';
import { TodoApiClient } from '~/infra/adapters/todo/todoApiClient';
import { getApiClient } from '../apiClient';

const apiClient = getApiClient();
const todoApiClient = new TodoApiClient(apiClient);

export function getTodoApiClient(): ITodoApiClient {
  return todoApiClient;
}
