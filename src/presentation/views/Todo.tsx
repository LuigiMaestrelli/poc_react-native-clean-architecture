import React, { useState, useEffect } from 'react';
import { FlatList, Button } from 'react-native';

import { Todo } from '~/domain/models/general/todo';
import { useToast } from '~/main/hooks/toast';
import { useTodoUseCase } from '~/main/hooks/todo';
import { TodoItem } from '~/presentation/components/Todo';

type RenderItemProps = {
  item: Todo;
};

const renderItem = ({ item }: RenderItemProps) => <TodoItem todo={item} />;

export const TodoView = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { findAll } = useTodoUseCase();
  const { showSuccess } = useToast();

  useEffect(() => {
    let mounted = true;
    findAll().then(todos => {
      if (!mounted) return;
      setTodos(todos);
    });

    return () => {
      mounted = false;
    };
  }, [findAll]);

  const showToast = () => {
    showSuccess('Test toast');
  };

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={item => `${item.id}`}
      ListHeaderComponent={<Button title="Show toast" onPress={showToast} />}
    />
  );
};
