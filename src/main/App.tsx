import React from 'react';
import { SafeAreaView } from 'react-native';
import { TodoView } from '~/presentation/views/Todo';
import { ToastProvider } from './providers/ToastProvider';

const App = () => {
  return (
    <ToastProvider>
      <SafeAreaView testID="safearea-testid">
        <TodoView />
      </SafeAreaView>
    </ToastProvider>
  );
};

export default App;
