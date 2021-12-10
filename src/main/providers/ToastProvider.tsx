import React, { createContext, useCallback } from 'react';
import Toast from 'react-native-toast-message';

type ToastProviderType = {
  children: React.ReactElement;
};

export type ToastContextType = {
  showSuccess: (title: string, subtitle?: string) => void;
};

export const ToastContext = createContext({} as ToastContextType);
export const ToastContextConsumer = ToastContext.Consumer;

export function ToastProvider({ children }: ToastProviderType) {
  const showSuccess = useCallback((title: string, subtitle?: string): void => {
    Toast.show({
      type: 'success',
      text1: title,
      text2: subtitle
    });
  }, []);

  return (
    <ToastContext.Provider value={{ showSuccess }}>
      {children}
      <Toast />
    </ToastContext.Provider>
  );
}
