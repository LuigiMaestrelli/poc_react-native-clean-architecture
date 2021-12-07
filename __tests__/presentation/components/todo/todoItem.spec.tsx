import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { TodoItem } from '~/presentation/components/Todo';
import { Todo } from '~/domain/models/general/todo';

describe('Presentation - components - todo - TodoItem', () => {
  it('should render the title', async () => {
    const todo: Todo = {
      id: 1,
      title: 'Test title',
      completed: true,
      userId: 1
    };
    const { findByText } = render(<TodoItem todo={todo} />);

    const title = await findByText('Test title');

    expect(title).toBeTruthy();
    expect(title.props.style.fontSize).toBe(20);
  });
});
