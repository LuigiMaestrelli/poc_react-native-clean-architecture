import { makeApiClientStub } from 'tests/testUtils/stubs/apiClientStub';
import { ApiResponse, IApiClient } from '~/application/protocols/apiClient';
import { Todo } from '~/domain/models/general/todo';
import { TodoApiClient } from '~/infra/adapters/todo/todoApiClient';

type SutTypes = {
  sut: TodoApiClient;
  apiClientStub: IApiClient;
};

const makeSut = (): SutTypes => {
  const apiClientStub = makeApiClientStub();
  const sut = new TodoApiClient(apiClientStub);

  return {
    sut,
    apiClientStub
  };
};

describe('Infra - adapters - todo - TodoApiClient', () => {
  it('should call apiClient.get with correct values', async () => {
    const { sut, apiClientStub } = makeSut();
    const getSpy = jest.spyOn(apiClientStub, 'get');

    await sut.findAll();

    expect(getSpy).toHaveBeenCalledWith('todos/');
  });

  it('should throw with apiClient.get throws', async () => {
    const { sut, apiClientStub } = makeSut();
    jest.spyOn(apiClientStub, 'get').mockImplementationOnce(() => {
      return new Promise((resolve, reject) => reject(new Error('Test error')));
    });

    const findAllPromise = sut.findAll();

    await expect(findAllPromise).rejects.toThrow(new Error('Test error'));
  });

  it('should return the date object from apiClient', async () => {
    const { sut, apiClientStub } = makeSut();

    const result: ApiResponse<Todo[]> = {
      data: [{ id: 1, userId: 1, completed: false, title: 'Some todo' }],
      status: 200,
      headers: {},
      statusText: 'Success',
      total: 1
    };

    jest
      .spyOn(apiClientStub, 'get')
      .mockReturnValueOnce(new Promise(resolve => resolve(result)));

    const responseData = await sut.findAll();

    expect(responseData).toEqual(result.data);
  });
});
