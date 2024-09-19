import React from 'react';
import {View} from 'react-native';
import {HeaderLayout} from './src/layouts';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Home} from './src/components';
import {AuthGuard} from './src/hoc';

function App() {
  return (
    <SafeAreaProvider>
      <AuthGuard>
        <View className="">
          <HeaderLayout>
            <Home />
          </HeaderLayout>
        </View>
      </AuthGuard>
    </SafeAreaProvider>
  );
}

export default App;
