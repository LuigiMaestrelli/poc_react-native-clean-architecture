import React from 'react';
import { render } from '@testing-library/react-native';
import App from '~/main/App';

describe('Main - App', () => {
  it('should render the SafeArea', async () => {
    const { findByTestId } = render(<App />);
    const safeArea = await findByTestId('safearea-testid');
    expect(safeArea).toBeTruthy();
  });
});
