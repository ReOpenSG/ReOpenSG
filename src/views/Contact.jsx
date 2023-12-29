import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import BannerSection from '@/components/Common/BannerSection';
import Agreement from '@/components/Contact/Agreement';
import styles from '@/styles/styles.module.css';
import ContactButton from '@/components/Contact/ContactButton';
import Content from '@/components/Contact/Content';
import InquiryType from '@/components/Contact/InquiryType';
import PersonalInfo from '@/components/Contact/PersonalInfo';
import { emailConfig } from '@/data/emailConfig';

function Contact() {
  const form = useRef(null);
  const [agreementStatus, setAgreementStatus] = useState(false);

  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(emailConfig.serviceId, emailConfig.templateId, form.current, emailConfig.apiKey)
      .then(() => {
        navigate('/contact/success');
      })
      .catch(() => {
        navigate('/contact/fail');
      });

    emailjs
      .sendForm(emailConfig.serviceId, emailConfig.templateId, form.current, emailConfig.ctoApiKey)
      .then(() => {
        navigate('/contact/success');
      })
      .catch(() => {
        navigate('/contact/fail');
      });
  };

  const handleErrorMessage = () => {
    if (!agreementStatus) {
      toast.error('개인정보 활용동의에 체크해 주세요.');
    }
  };

  return (
    <div className={styles.contact}>
      <form ref={form} onSubmit={sendEmail} className={styles.formWrapper}>
        <BannerSection category="Support" title="고객문의" />
        <InquiryType />
        <PersonalInfo />
        <Content />
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

export default Contact;
