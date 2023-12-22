import React, { Suspense, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { onAuthStateChanged } from 'firebase/auth';
import router from './routes/routes';
import { isLoggedInState } from '@/recoil/atoms/authStore';
import { authService } from '../firebase';
import Spinner from './components/Common/Spinner';

function App() {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authService, (user) => {
      if (user) {
        // 로그인된 상태
        setIsLoggedIn(true);
      } else {
        // 로그아웃된 상태
        setIsLoggedIn(false);
      }
    });

    // 컴포넌트가 언마운트될 때 observer를 해제하기 위해 cleanup 함수를 반환합니다.
    return () => unsubscribe();
  }, [setIsLoggedIn]);

  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
