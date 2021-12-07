import React from 'react';
import { ToastProvider } from '~/main/providers/ToastProvider';

export const MockProviders = ({ children }: any) => (
  <ToastProvider>{children}</ToastProvider>
);
