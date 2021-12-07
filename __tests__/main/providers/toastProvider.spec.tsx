import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import {
  ToastContextConsumer,
  ToastProvider
} from '~/main/providers/ToastProvider';
import { Button, Text } from 'react-native';
import { mockShow } from 'tests/testUtils/mocks/reactNativeToastMessage';
import { render } from 'tests/testUtils/render';

describe('Main - providers - ToastProvider', () => {
  describe('ContextProvider', () => {
    it('should render the children', async () => {
      const { findByText } = render(
        <ToastProvider>
          <Text>Test</Text>
        </ToastProvider>
      );
      const textTest = await findByText('Test');
      expect(textTest).toBeTruthy();
    });
  });

  describe('showSuccess', () => {
    it('should call Toast.show with correct values', async () => {
      const { findByText } = render(
        <ToastContextConsumer>
          {({ showSuccess }) => {
            return (
              <Button
                title="Test"
                onPress={() => showSuccess('Text 1', 'Text 2')}
              />
            );
          }}
        </ToastContextConsumer>
      );

      const button = await findByText('Test');
      fireEvent.press(button);
      expect(mockShow).toHaveBeenCalledWith({
        text1: 'Text 1',
        text2: 'Text 2',
        type: 'success'
      });
    });
  });
});
