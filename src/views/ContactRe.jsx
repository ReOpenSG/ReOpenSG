import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { emailConfig } from '@/data/emailConfig';
import styles from '@/styles/styles.module.css';
import BannerSection from '@/components/Common/BannerSection';
import InquiryType from '@/components/Contact/InquiryType';
import Agreement from '@/components/Contact/Agreement';
import ContactButton from '@/components/Contact/ContactButton';
import PersonalInfoRe from '@/components/Contact/PersonalInfoRe';
import ContentRe from '@/components/Contact/ContentRe';

function ContactRe() {
  const formRe = useRef(null);
  const [agreementStatus, setAgreementStatus] = useState(false);

  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(emailConfig.serviceId, emailConfig.templateId, formRe.current, emailConfig.apiKey)
      .then(
        () => {
          navigate('/contact/success');
        },
        () => {
          navigate('/contact/fail');
        },
      );

    emailjs
      .sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        formRe.current,
        emailConfig.ceoApiKey,
      )
      .then(
        () => {
          navigate('/contact/success');
        },
        () => {
          navigate('/contact/fail');
        },
      );
  };

  const handleErrorMessage = () => {
    if (!agreementStatus) {
      toast.error('개인정보 활용동의에 체크해 주세요.');
    }
  };

  return (
    <div className={styles.contact}>
      <form ref={formRe} onSubmit={sendEmail} className={styles.formWrapper}>
        <BannerSection category="Support" title="고객문의" />
        <InquiryType />
        <PersonalInfoRe />
        <ContentRe />
        <Agreement state={agreementStatus} setState={setAgreementStatus} />
        <ContactButton
          buttonText="문의하기"
          buttonStyle="-text--openfoundation-secondary font-open-label text-open-font-medium tablet:text-open-font-xl desktop:text-open-font-xl p-open-lg rounded-[20px] -bg--open-accent-accent w-[180px] block mx-auto mb-open-5xl"
          type={`${agreementStatus ? 'submit' : 'button'}`}
          onClick={handleErrorMessage}
        />
      </form>
    </div>
  );
}

export default ContactRe;
