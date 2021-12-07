import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';

import { TodoView } from '~/presentation/views/Todo';
import { Todo } from '~/domain/models/general/todo';
import { mockFindAll } from 'tests/testUtils/mocks/todoUseCase';

describe('Presentation - Todo', () => {
  it('should render the list', async () => {
    const todos: Todo[] = [
      {
        id: 1,
        title: 'Test title',
        completed: true,
        userId: 1
      }
    ];

    mockFindAll.mockReturnValueOnce(new Promise(resolve => resolve(todos)));

    const { findByText } = render(<TodoView />);

    const title = await findByText('Test title');

    expect(title).toBeTruthy();
  });

  it('not render if the component is unmounted', async () => {
    const todos: Todo[] = [
      {
        id: 1,
        title: 'Test title',
        completed: true,
        userId: 1
      }
    ];

    const mockSetTodos = jest.fn();
    jest.spyOn(React, 'useState').mockReturnValueOnce([[], mockSetTodos]);

    mockFindAll.mockReturnValueOnce(
      new Promise(resolve => {
        resolve(todos);
      })
    );

    const { unmount } = render(<TodoView />);
    unmount();

    expect(mockSetTodos).not.toHaveBeenCalled();
  });
});
