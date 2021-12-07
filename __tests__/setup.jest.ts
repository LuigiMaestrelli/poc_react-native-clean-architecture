import {
  applyTodoUseCaseMock,
  resetTodoUseCaseMock
} from './testUtils/mocks/todoUseCase';

applyTodoUseCaseMock();

beforeEach(() => {
  resetTodoUseCaseMock();
});
