import { getApiClient } from '~/main/factories/infra/apiClient';

describe('ApiClient Factory', () => {
  it('should return a valid IApiClient', () => {
    const result = getApiClient();
    expect(result).toBeTruthy();
  });
});
