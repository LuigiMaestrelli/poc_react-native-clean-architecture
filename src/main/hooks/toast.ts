import { useContext } from 'react';
import { ToastContext, ToastContextType } from '~/main/providers/ToastProvider';

export function useToast(): ToastContextType {
  return useContext(ToastContext);
}
