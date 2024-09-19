import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';


export const Header = () => {
  const insets = useSafeAreaInsets();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <View>
      <View
        style={{
          paddingTop: insets.top,
        }}
        className="w-full min-h-[50px] flex-row items-center justify-between px-4">
        <Text className="text-gray-800 text-3xl font-bold">헤더</Text>
        <TouchableOpacity onPress={() => setIsMenuOpen(!isMenuOpen)}>
          <Text className="text-gray-800 text-4xl">☰</Text>
        </TouchableOpacity>
      </View>
      {isMenuOpen && (
        <View className="absolute right-4 top-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <TouchableOpacity className="px-4 py-2 border-b border-gray-200">
            <Text className="text-gray-800 text-lg">메뉴 1</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-4 py-2 border-b border-gray-200">
            <Text className="text-gray-800 text-lg">메뉴 2</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-4 py-2">
            <Text className="text-gray-800 text-lg">메뉴 3</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
