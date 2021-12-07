import {
  applyTodoUseCaseMock,
  resetTodoUseCaseMock
} from './testUtils/mocks/hooks/todoUseCase';
import {
  applyUseToastMock,
  resetUseToastMock
} from './testUtils/mocks/hooks/toast';
import { applyReactNativeToastMessageMock } from './testUtils/mocks/reactNativeToastMessage';

applyTodoUseCaseMock();
applyUseToastMock();
applyReactNativeToastMessageMock();

beforeEach(() => {
  resetTodoUseCaseMock();
  resetUseToastMock();
});
