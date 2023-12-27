import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoticeButton from '@/components/Contact/CheckButton';
import NoticeContent from '@/components/Contact/NoticeContent';
import FailIcon from '@/components/Contact/icons/FailIcon';

function ContactFail() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-open-5xl justify-center h-screen">
      <FailIcon />
      <NoticeContent
        mainTopText="죄송합니다."
        mainBottomText="현재 일시적인 오류로 인해 접수가 불가합니다."
        subTopText="담당자에게 별도로 문의하시면 최선을 다해 도움을 드리겠습니다."
        subBottomText="문의 담당자 연락처: 031-373-2612"
      />
      <div className="flex gap-open-xl">
        <NoticeButton
          type="button"
          className="-text--openfoundation-secondary font-open-label text-open-font-xl -bg--open-accent-accent px-open-4xl py-open-lg rounded-[20px]"
          text="다시 시도"
          onClick={() => {
            navigate('/contact/retry');
          }}
        />
        <NoticeButton
          type="button"
          className="-text--open-accent-accent font-open-label text-open-font-xl border-2 -border--open-accent-accent px-open-4xl py-open-lg rounded-[20px]"
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
