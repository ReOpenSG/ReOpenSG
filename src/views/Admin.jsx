import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../firebase';
import { isLoggedInState } from '@/recoil/atoms/authStore';
import BannerSection from '@/components/Common/BannerSection';
import styles from '@/components/Admin/Admin.module.css';

function Admin() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const navigate = useNavigate();
  const handleId = (e) => setId(e.target.value);
  const handlePw = (e) => setPw(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(authService, id, pw);
      await setPersistence(authService, browserSessionPersistence);
      navigate('/community');
    } catch (error) {
      toast(error);
    }
  };

  const handleLogout = () => {
    signOut(authService);
    setId('');
    setPw('');
  };

  return (
    <div className={styles.container}>
      <BannerSection category="Admin" title="관리자 페이지" />
      <section className={styles.section}>
        {!isLoggedIn ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputWrapper}>
              <label htmlFor="id" className={styles.label}>
                아이디
              </label>
              <input
                type="text"
                id="id"
                name="id"
                onChange={handleId}
                placeholder="아이디를 입력하세요"
                className={styles.input}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="pw" className={styles.label}>
                비밀번호
              </label>
              <input
                type="password"
                id="pw"
                name="pw"
                onChange={handlePw}
                placeholder="비밀번호를 입력하세요"
                className={styles.input}
              />
            </div>
            <input type="submit" value="로그인" className={styles.button} />
          </form>
        ) : (
          <div className={styles.buttonWrapper}>
            <p className="text-open-font-xl tablet:text-open-font-xxl desktop:text-open-font-xxl">
              환영합니다, 관리자님!
            </p>
            <button type="button" onClick={handleLogout} className={styles.button}>
              로그아웃
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Admin;
