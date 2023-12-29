import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import FillingInput from './FillingInput';
import styles from '@/styles/styles.module.css';

function ContentRe() {
  const textareaId = uuidv4();

  return (
    <fieldset className={styles.contentWrapper}>
      <FillingInput
        labelText="제목"
        inputType="text"
        name="title"
        maxLength="100"
        defaultValue={localStorage.getItem('title')}
      />
      <div className={styles.wrapper}>
        <label htmlFor={textareaId}>
          <h3 className={styles.label}>내용</h3>
        </label>
        <textarea
          name="message"
          id={textareaId}
          cols="30"
          rows="10"
          placeholder="내용을 입력해 주세요."
          className={styles.textarea}
          maxLength="500"
          defaultValue={localStorage.getItem('message')}
        />
      </div>
    </fieldset>
  );
}

export default ContentRe;
