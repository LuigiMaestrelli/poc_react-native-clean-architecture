import React from 'react';

export const mockShow = jest.fn();
export const mockHide = jest.fn();

const mockDefault = ({ children }: { children: Array<React.ReactElement> }) => {
  return <></>;
};

mockDefault.show = mockShow;
mockDefault.hide = mockHide;

export const applyReactNativeToastMessageMock = () => {
  jest.mock('react-native-toast-message', () => {
    return {
      __esModule: true,
      default: mockDefault
    };
  });
};
