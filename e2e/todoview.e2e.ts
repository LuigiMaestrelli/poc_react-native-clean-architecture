import { device, by, element, expect } from 'detox';

describe('TodoView', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have the button', async () => {
    const button = element(by.text('SHOW TOAST'));
    await expect(button).toBeVisible();
  });

  it('should show the toast after pressing the button', async () => {
    const button = element(by.text('SHOW TOAST'));
    await button.tap();

    const toastInfo = element(by.text('Test toast'));
    await expect(toastInfo).toBeVisible();
  });
});
