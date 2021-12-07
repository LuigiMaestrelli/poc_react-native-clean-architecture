import { makeTodoApiClientStub } from 'tests/testUtils/stubs/todoApiClientStub';
import { ITodoApiClient } from '~/application/protocols/todo/todoApiClient';
import { TodoUseCase } from '~/application/useCases/todo/todoUseCase';
import { Todo } from '~/domain/models/general/todo';

type SutTypes = {
  sut: TodoUseCase;
  todoApiClientSub: ITodoApiClient;
};

const makeSut = (): SutTypes => {
  const todoApiClientSub = makeTodoApiClientStub();
  const sut = new TodoUseCase(todoApiClientSub);

  return {
    sut,
    todoApiClientSub
  };
};

describe('Application - UseCases - TodoUseCase', () => {
  it('should call todoApiClient with correct values', async () => {
    const { sut, todoApiClientSub } = makeSut();
    const findAllSpy = jest.spyOn(todoApiClientSub, 'findAll');

    await sut.findAll();

    expect(findAllSpy).toHaveBeenCalled();
  });

  it('should throw with todoApiClient throws', async () => {
    const { sut, todoApiClientSub } = makeSut();
    jest.spyOn(todoApiClientSub, 'findAll').mockImplementationOnce(() => {
      return new Promise((resolve, reject) => reject(new Error('Test error')));
    });

    const findAllPromise = sut.findAll();

    await expect(findAllPromise).rejects.toThrow(new Error('Test error'));
  });

  it('should return the values from todoApiClient', async () => {
    const { sut, todoApiClientSub } = makeSut();

    const testData: Todo[] = [
      { id: 1, userId: 1, completed: false, title: 'Some todo' }
    ];

    jest
      .spyOn(todoApiClientSub, 'findAll')
      .mockReturnValueOnce(new Promise(resolve => resolve(testData)));

    const result = await sut.findAll();

    expect(result).toEqual(testData);
  });
});
