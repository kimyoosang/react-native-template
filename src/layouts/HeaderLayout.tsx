import React from 'react';
import {View} from 'react-native';
import {Header} from '../components';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <Header />
      <View className="w-full items-center justify-center">{children}</View>
    </>
  );
};

export default Layout;
