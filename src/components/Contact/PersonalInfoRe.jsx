import React from 'react';
import styles from './Contact.module.css';
import FillingInput from './FillingInput';

function PersonalInfoRe() {
  return (
    <fieldset className="py-open-2xl border-b -border--open-gray-200 flex flex-col gap-open-lg tablet:gap-open-xl desktop:gap-open-xl">
      <div className={styles.personalInfoWrapper}>
        <div className={styles.regWrapper}>
          <FillingInput
            labelText="소속"
            inputType="text"
            name="office"
            defaultValue={localStorage.getItem('office')}
          />
        </div>
        <div className={styles.regWrapper}>
          <FillingInput
            labelText="성명"
            inputType="text"
            name="name"
            defaultValue={localStorage.getItem('name')}
          />
        </div>
      </div>
      <div className={styles.personalInfoWrapper}>
        <FillingInput
          labelText="받으실 이메일"
          inputType="email"
          name="email"
          defaultValue={localStorage.getItem('email')}
        />
        <FillingInput
          labelText="받으실 연락처"
          inputType="tel"
          name="tel"
          maxLength="13"
          defaultValue={localStorage.getItem('tel')}
        />
      </div>
    </fieldset>
  );
}

export default PersonalInfoRe;
