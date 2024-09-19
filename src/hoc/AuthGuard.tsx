import React, {ReactNode, useEffect} from 'react';
import {useAuthStore} from '../store';

const AuthGuard = ({children}: {children: ReactNode}) => {
  const {isAuthenticated} = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      console.log('어스 가드에서 로그인 상태');
    }
  }, [isAuthenticated]);
  return <>{children}</>;
};

export default AuthGuard;
