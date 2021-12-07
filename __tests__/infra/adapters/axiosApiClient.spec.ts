import { AxiosApiClient } from '~/infra/adapters/axiosApiClient';
import { AxiosResponse } from 'axios';

const makeSut = (): AxiosApiClient => {
  return new AxiosApiClient();
};

const makeValidAxiosResponse = (): AxiosResponse => {
  return {
    data: 'valid data',
    status: 200,
    statusText: 'success',
    headers: {
      'x-total-count': '10',
      someHeader: 'test'
    },
    config: {}
  };
};

describe('Axios API Adapter', () => {
  describe('get', () => {
    test('should return a valid data from response', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'get')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.get('valid url');
      expect(response.data).toBe('valid data');
    });

    test('should return a valid status a success response', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'get')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.get('valid url');
      expect(response.status).toBe(200);
    });

    test('should return a valid statusText a success response', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'get')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.get('valid url');
      expect(response.statusText).toBe('success');
    });

    test('should return a valid total count', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'get')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.get('valid url');
      expect(response.total).toBe(10);
    });

    test('should return all request headers', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'get')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.get('valid url');
      expect(response.headers).toEqual({
        'x-total-count': '10',
        someHeader: 'test'
      });
    });

    it('should return total 0 if no header was found', async () => {
      const sut = makeSut();
      jest.spyOn(sut.axiosApi, 'get').mockReturnValueOnce(
        new Promise(resolve =>
          resolve({
            data: 'valid data',
            status: 200,
            statusText: 'success',
            headers: {
              someHeader: 'test'
            },
            config: {}
          })
        )
      );

      const response = await sut.get('valid url');
      expect(response.total).toBe(0);
    });

    it('should return total as number if header was returned as string', async () => {
      const sut = makeSut();
      jest.spyOn(sut.axiosApi, 'get').mockReturnValueOnce(
        new Promise(resolve =>
          resolve({
            data: 'valid data',
            status: 200,
            statusText: 'success',
            headers: {
              'x-total-count': '15',
              someHeader: 'test'
            },
            config: {}
          })
        )
      );

      const response = await sut.get('valid url');
      expect(response.total).toBe(15);
    });
  });

  describe('delete', () => {
    test('should return a valid data from response', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'delete')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.delete('valid url');
      expect(response.data).toBe('valid data');
    });

    test('should return a valid status a success response', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'delete')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.delete('valid url');
      expect(response.status).toBe(200);
    });

    test('should return a valid statusText a success response', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'delete')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.delete('valid url');
      expect(response.statusText).toBe('success');
    });

    test('should return total 0 on delete', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'delete')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.delete('valid url');
      expect(response.total).toBe(0);
    });

    test('should return all request headers', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'delete')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.delete('valid url');
      expect(response.headers).toEqual({
        'x-total-count': '10',
        someHeader: 'test'
      });
    });
  });

  describe('post', () => {
    test('should return a valid data from response', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'post')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.post('valid url', { someData: 1 });
      expect(response.data).toBe('valid data');
    });

    test('should return a valid status a success response', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'post')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.post('valid url', { someData: 1 });
      expect(response.status).toBe(200);
    });

    test('should return a valid statusText a success response', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'post')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.post('valid url', { someData: 1 });
      expect(response.statusText).toBe('success');
    });

    test('should return total 0 on post', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'post')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.post('valid url', { someData: 1 });
      expect(response.total).toBe(0);
    });

    test('should return all request headers', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'post')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.post('valid url', { someData: 1 });
      expect(response.headers).toEqual({
        'x-total-count': '10',
        someHeader: 'test'
      });
    });
  });

  describe('put', () => {
    test('should return a valid data from response', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'put')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.put('valid url', { someData: 1 });
      expect(response.data).toBe('valid data');
    });

    test('should return a valid status a success response', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'put')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.put('valid url', { someData: 1 });
      expect(response.status).toBe(200);
    });

    test('should return a valid statusText a success response', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'put')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.put('valid url', { someData: 1 });
      expect(response.statusText).toBe('success');
    });

    test('should return total 0 on put', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'put')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.put('valid url', { someData: 1 });
      expect(response.total).toBe(0);
    });

    test('should return all request headers', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'put')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.put('valid url', { someData: 1 });
      expect(response.headers).toEqual({
        'x-total-count': '10',
        someHeader: 'test'
      });
    });
  });

  describe('patch', () => {
    test('should return a valid data from response', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'patch')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.patch('valid url', { someData: 1 });
      expect(response.data).toBe('valid data');
    });

    test('should return a valid status a success response', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'patch')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.patch('valid url', { someData: 1 });
      expect(response.status).toBe(200);
    });

    test('should return a valid statusText a success response', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'patch')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.patch('valid url', { someData: 1 });
      expect(response.statusText).toBe('success');
    });

    test('should return total 0 on patch', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'patch')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.patch('valid url', { someData: 1 });
      expect(response.total).toBe(0);
    });

    test('should return all request headers', async () => {
      const sut = makeSut();
      jest
        .spyOn(sut.axiosApi, 'patch')
        .mockReturnValueOnce(
          new Promise(resolve => resolve(makeValidAxiosResponse()))
        );

      const response = await sut.patch('valid url', { someData: 1 });
      expect(response.headers).toEqual({
        'x-total-count': '10',
        someHeader: 'test'
      });
    });
  });
});
