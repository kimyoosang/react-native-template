import React from 'react';
import {View} from 'react-native';
import {Header} from '../components';

type LayoutProps = {
  children: React.ReactNode;
};

const HeaderLayout = ({children}: LayoutProps) => {
  return (
    <>
      <Header />
      <View className="w-full items-center justify-center z-10">
        {children}
      </View>
    </>
  );
};

export default HeaderLayout;
