import React from 'react';
import { SafeAreaView } from 'react-native';
import { TodoView } from '~/presentation/views/Todo';

const App = () => {
  return (
    <SafeAreaView testID="safearea-testid">
      <TodoView />
    </SafeAreaView>
  );
};
export default App;
