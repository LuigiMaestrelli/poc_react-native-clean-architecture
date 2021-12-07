const mockFn = () => new Promise(resolve => resolve([]));
export const mockFindAll = jest.fn(mockFn);

export const applyTodoUseCaseMock = () => {
  jest.mock('~/main/hooks/todo', () => ({
    useTodoUseCase: () => ({
      findAll: mockFindAll
    })
  }));
};

export const resetTodoUseCaseMock = () => {
  mockFindAll.mockReset();
  mockFindAll.mockImplementation(mockFn);
};
