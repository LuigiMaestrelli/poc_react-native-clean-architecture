import { getTodoUseCase } from '~/main/factories/usecases/todo/todoUseCase';

describe('TodoUseCase Factory', () => {
  it('should return a valid ITodoUseCase', () => {
    const result = getTodoUseCase();
    expect(result).toBeTruthy();
  });
});
