import { IApiClient } from '~/application/protocols/apiClient';
import { AxiosApiClient } from '~/infra/adapters/axiosApiClient';

const axiosApiClient = new AxiosApiClient();

export function getApiClient(): IApiClient {
  return axiosApiClient;
}
