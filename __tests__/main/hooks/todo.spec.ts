describe('Main - hooks - todo', () => {
  it('should return a valid ITodoUseCase', () => {
    const { useTodoUseCase } = jest.requireActual('~/main/hooks/todo');
    const result = useTodoUseCase();
    expect(result).toBeTruthy();
  });
});
