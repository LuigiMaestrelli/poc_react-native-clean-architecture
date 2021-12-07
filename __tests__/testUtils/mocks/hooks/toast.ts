import { ToastContextType } from '~/main/providers/ToastProvider';

export const mockShowSuccess = jest.fn();

export const applyUseToastMock = () => {
  jest.mock('~/main/hooks/toast', () => ({
    useToast: (): ToastContextType => ({
      showSuccess: mockShowSuccess
    })
  }));
};

export const resetUseToastMock = () => {
  mockShowSuccess.mockReset();
};
