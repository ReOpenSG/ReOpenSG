import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@/styles/styles.module.css';
import SuccessIcon from '@/components/Contact/icons/SuccessIcon';
import NoticeButton from '@/components/Contact/CheckButton';
import NoticeContent from '@/components/Contact/NoticeContent';

function ContactSuccess() {
  const navigate = useNavigate();
  return (
    <div className={styles.contactSuccess}>
      <SuccessIcon />
      <NoticeContent
        mainTopText="문의가 정상적으로 접수되었습니다."
        subTopText="담당자가 문의를 처리할 예정이니 잠시만 기다려 주세요."
      />
      <NoticeButton
        type="button"
        onClick={() => {
          navigate('/');
          localStorage.clear();
        }}
        className={styles.mainButton}
        text="확인"
      />
    </div>
  );
}

export default ContactSuccess;
