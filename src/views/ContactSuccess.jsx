import React from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessIcon from '@/components/Contact/icons/SuccessIcon';
import NoticeButton from '@/components/Contact/CheckButton';
import NoticeContent from '@/components/Contact/NoticeContent';

function ContactSuccess() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-open-5xl justify-center h-screen">
      <SuccessIcon />
      <NoticeContent
        mainTopText="문의가 정상적으로 접수되었습니다."
        subTopText="담당자가 문의를 처리할 예정이니 잠시만 기다려 주세요."
      />
      <NoticeButton
        type="button"
        onClick={() => {
          navigate('/');
        }}
        className="-text--openfoundation-secondary font-open-label text-open-font-xl -bg--open-accent-accent px-open-4xl py-open-lg rounded-[20px]"
        text="확인"
      />
    </div>
  );
}

export default ContactSuccess;
