import React from 'react';
import InquiryInput from './InquiryInput';
import { data } from '@/data/contactData';
import styles from './Contact.module.css';

function InquiryType() {
  return (
    <fieldset className={styles.inquiryWrapper}>
      <h3 className={styles.label}>문의유형</h3>
      <div>
        {data.map(({ id, defaultValue }) => (
          <InquiryInput
            key={id}
            type="radio"
            id={id}
            name="type"
            defaultValue={defaultValue}
            labelText={defaultValue}
          />
        ))}
      </div>
    </fieldset>
  );
}

export default InquiryType;
