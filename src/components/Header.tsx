import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAuthStore} from '../store';

const Header = () => {
  const insets = useSafeAreaInsets();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isAuthenticated, login, logout, user} = useAuthStore();

  const handleLogin = () => {
    const user = {id: '1', name: 'John Doe', email: 'john@example.com'};
    login(user);
  };

  return (
    <View className="z-30">
      <View
        style={{
          paddingTop: insets.top + 30,
        }}
        className="w-full min-h-[50px] flex-row items-center justify-between px-4">
        <Text className="text-gray-800 text-3xl font-bold">헤더</Text>
        <TouchableOpacity onPress={() => setIsMenuOpen(!isMenuOpen)}>
          <Text className="text-gray-800 text-4xl">☰</Text>
        </TouchableOpacity>
      </View>
      {isMenuOpen && (
        <View className="absolute w-[150px] right-4 top-full bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center">
          {!isAuthenticated ? (
            <TouchableOpacity>
              <Text onPress={handleLogin} className="text-lg text-blue-600 p-2">
                로그인
              </Text>
            </TouchableOpacity>
          ) : (
            <Text className="p-2 text-xl text-black text-center">
              {user?.name}
            </Text>
          )}
          <TouchableOpacity className="px-4 py-2 border-b border-gray-200 w-full items-center">
            <Text className="text-gray-800 text-lg">메뉴 1</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-4 py-2 border-b border-gray-200 w-full items-center">
            <Text className="text-gray-800 text-lg">메뉴 2</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-4 py-2 border-b border-gray-200 w-full items-center">
            <Text className="text-gray-800 text-lg">메뉴 3</Text>
          </TouchableOpacity>
          {isAuthenticated && (
            <TouchableOpacity>
              <Text onPress={logout} className="text-lg text-red-600 p-2">
                로그아웃
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default Header;
// {isAuthenticated ? (
//   <Text className="text-2xl">👤</Text>
// ) : (
//   <Text className="text-lg">로그인</Text>
// )}
