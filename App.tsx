import React from 'react';
import {Text, View} from 'react-native';
import {HeaderLayout} from './src/layouts';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <View className="">
        <HeaderLayout>
          <Text className="text-3xl border-2 border-red-600 text-red-800">
            홈 페이지
          </Text>
        </HeaderLayout>
      </View>
    </SafeAreaProvider>
  );
}

export default App;
