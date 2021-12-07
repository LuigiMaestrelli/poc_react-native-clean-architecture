import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react-native';

import { MockProviders } from './mockProviders';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: MockProviders, ...options });

export * from '@testing-library/react-native';
export { customRender as render };
