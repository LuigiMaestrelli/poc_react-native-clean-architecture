import { getTodoApiClient } from '~/main/factories/infra/todo/todoApiClient';

describe('TodoApiClient Factory', () => {
  it('should return a valid ITodoApiClient', () => {
    const result = getTodoApiClient();
    expect(result).toBeTruthy();
  });
});
