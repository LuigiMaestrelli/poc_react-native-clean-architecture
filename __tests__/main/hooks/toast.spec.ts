import { renderHook } from '@testing-library/react-hooks';

describe('main - hooks - toast', () => {
  it('should return a valid ToastContextType', () => {
    const { useToast } = jest.requireActual('~/main/hooks/toast');
    const { result } = renderHook(() => useToast());
    expect(result.current).toBeTruthy();
  });
});
