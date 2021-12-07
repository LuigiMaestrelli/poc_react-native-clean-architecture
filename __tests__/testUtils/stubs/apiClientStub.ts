import {
  ApiRequestConfig,
  ApiResponse,
  IApiClient
} from '~/application/protocols/apiClient';

class ApiClientStub implements IApiClient {
  async get<TResponse>(
    url: string,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<TResponse>> {
    return {
      data: {} as TResponse,
      headers: {
        someHeader: 1
      },
      status: 200,
      statusText: 'Ok',
      total: 0
    };
  }

  async post<TResponse>(
    url: string,
    data: any,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<TResponse>> {
    return {
      data: {} as TResponse,
      headers: {
        someHeader: 1
      },
      status: 200,
      statusText: 'Ok',
      total: 0
    };
  }

  async put<TResponse>(
    url: string,
    data: any,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<TResponse>> {
    return {
      data: {} as TResponse,
      headers: {
        someHeader: 1
      },
      status: 200,
      statusText: 'Ok',
      total: 0
    };
  }

  async patch<TResponse>(
    url: string,
    data: any,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<TResponse>> {
    return {
      data: {} as TResponse,
      headers: {
        someHeader: 1
      },
      status: 200,
      statusText: 'Ok',
      total: 0
    };
  }

  async delete<TResponse>(
    url: string,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<TResponse>> {
    return {
      data: {} as TResponse,
      headers: {
        someHeader: 1
      },
      status: 200,
      statusText: 'Ok',
      total: 0
    };
  }

  setAuthToken(token: string): void {}

  removeAuthToken(): void {}
}

export const makeApiClientStub = (): IApiClient => {
  return new ApiClientStub();
};
