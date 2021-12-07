export type ApiMethod =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK';

export type ApiResponse<TResponse> = {
  data: TResponse;
  status: number;
  statusText: string;
  total: number;
  headers: any;
};

export type ApiRequestConfig = {
  url?: string;
  method?: ApiMethod;
  baseURL?: string;
  headers?: any;
  params?: any;
  data?: any;
  timeout?: number;
  timeoutErrorMessage?: string;
  withCredentials?: boolean;
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
};

export interface IApiClient {
  get<TResponse>(
    url: string,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<TResponse>>;
  post<TResponse>(
    url: string,
    data: any,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<TResponse>>;
  put<TResponse>(
    url: string,
    data: any,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<TResponse>>;
  patch<TResponse>(
    url: string,
    data: any,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<TResponse>>;
  delete<TResponse>(
    url: string,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<TResponse>>;
}
