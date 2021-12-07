import {
  IApiClient,
  ApiResponse,
  ApiRequestConfig
} from '~/application/protocols/apiClient';
import axios, { AxiosInstance } from 'axios';

export class AxiosApiClient implements IApiClient {
  axiosApi: AxiosInstance;

  constructor() {
    this.axiosApi = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com/'
    });
  }

  get = async <TResponse>(
    url: string,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<TResponse>> => {
    const response = await this.axiosApi.get<TResponse>(url, config);

    let totalCount = 0;
    if (response.headers['x-total-count']) {
      totalCount = parseInt(response.headers['x-total-count']);
    }

    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      total: totalCount
    };
  };

  delete = async <TResponse>(
    url: string,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<TResponse>> => {
    const response = await this.axiosApi.delete<TResponse>(url, config);

    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      total: 0
    };
  };

  post = async <TResponse>(
    url: string,
    data: any,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<TResponse>> => {
    const response = await this.axiosApi.post<TResponse>(url, data, config);

    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      total: 0
    };
  };

  put = async <TResponse>(
    url: string,
    data: any,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<TResponse>> => {
    const response = await this.axiosApi.put<TResponse>(url, data, config);

    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      total: 0
    };
  };

  patch = async <TResponse>(
    url: string,
    data: any,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<TResponse>> => {
    const response = await this.axiosApi.patch<TResponse>(url, data, config);

    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      total: 0
    };
  };
}
