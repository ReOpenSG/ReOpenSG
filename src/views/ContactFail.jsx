import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@/styles/styles.module.css';
import NoticeButton from '@/components/Contact/CheckButton';
import NoticeContent from '@/components/Contact/NoticeContent';
import FailIcon from '@/components/Contact/icons/FailIcon';

function ContactFail() {
  const navigate = useNavigate();
  return (
    <div className={styles.contactFail}>
      <FailIcon />
      <NoticeContent
        mainTopText="죄송합니다."
        mainBottomText="현재 일시적인 오류로 인해 접수가 불가합니다."
        subTopText="담당자에게 별도로 문의하시면 최선을 다해 도움을 드리겠습니다."
        subBottomText="문의 담당자 연락처: 031-373-2612"
      />
      <div className={styles.buttonWrapper}>
        <NoticeButton
          type="button"
          className={styles.retryButton}
          text="다시 시도"
          onClick={() => {
            navigate('/contact/retry');
          }}
        />
        <NoticeButton
          type="button"
          className={styles.mainButton}
          text="메인으로"
          onClick={() => {
            navigate('/');
            localStorage.clear();
          }}
        />
      </div>
    </div>
  );
}

export default ContactFail;
