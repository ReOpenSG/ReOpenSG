import React, { useEffect, useState } from 'react';
import styles from '@/styles/styles.module.css';
import FillingInput from './FillingInput';

function PersonalInfo() {
  const [officeValue, setOfficeValue] = useState(null);
  const [nameValue, setNameValue] = useState(null);
  const [emailReg, setEmailReg] = useState('');
  const [telNumber, setTelNumber] = useState('');
  const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  useEffect(() => {
    if (officeValue !== null) {
      localStorage.setItem('office', officeValue);
    }

    if (nameValue !== null) {
      localStorage.setItem('name', nameValue);
    }

    if (emailReg !== null) {
      localStorage.setItem('email', emailReg);
    }

    if (telNumber !== null) {
      localStorage.setItem('tel', telNumber);
    }
  }, [emailReg, nameValue, officeValue, telNumber]);

  return (
    <fieldset className={styles.personalInfoWrapper}>
      <div className={styles.personalInfoContainer}>
        <FillingInput
          labelText="소속"
          inputType="text"
          name="office"
          placeholderText="회사/부서를 입력해 주세요."
          onChange={(e) => {
            setOfficeValue(e.target.value);
          }}
        />

        <FillingInput
          labelText="성명"
          inputType="text"
          name="name"
          placeholderText="성함을 입력해 주세요."
          onChange={(e) => {
            setNameValue(e.target.value);
          }}
        />
      </div>
      <div className={styles.personalInfoContainer}>
        <div className={styles.regWrapper}>
          <FillingInput
            labelText="받으실 이메일"
            inputType="email"
            name="email"
            placeholderText="이메일을 입력해 주세요."
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          />
          {emailCheck.test(emailReg) || emailReg === '' ? (
            ''
          ) : (
            <span className={styles.message}>유효한 이메일을 입력해 주세요.</span>
          )}
        </div>
        <div className={styles.regWrapper}>
          <FillingInput
            labelText="받으실 연락처"
            inputType="tel"
            name="tel"
            placeholderText="'-' 없이 입력해 주세요."
            maxLength="13"
            value={telNumber}
            onChange={(e) => {
              setTelNumber(
                e.target.value
                  .replace(/[^0-9]/g, '')
                  .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
                  .replace(/(\-{1,2})$/g, ''),
              );
            }}
          />
        </div>
      </div>
    </fieldset>
  );
}

export default PersonalInfo;
