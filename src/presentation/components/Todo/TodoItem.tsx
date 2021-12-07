import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Todo } from '~/domain/models/general/todo';

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{todo.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 20
  }
});
