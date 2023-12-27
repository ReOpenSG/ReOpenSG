import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FillingInput from './FillingInput';
import styles from './Contact.module.css';

function Content() {
  const textareaId = uuidv4();
  const [titleValue, setTitleValue] = useState(null);
  const [messageValue, setMessageValue] = useState(null);

  useEffect(() => {
    if (titleValue !== null) {
      localStorage.setItem('title', titleValue);
    }

    if (messageValue !== null) {
      localStorage.setItem('message', messageValue);
    }
  }, [messageValue, titleValue]);

  return (
    <fieldset className={styles.contentWrapper}>
      <FillingInput
        labelText="제목"
        inputType="text"
        name="title"
        placeholderText="제목을 입력해 주세요."
        maxLength="100"
        onChange={(e) => {
          setTitleValue(e.target.value);
        }}
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
          required
          onChange={(e) => {
            setMessageValue(e.target.value);
          }}
        />
      </div>
    </fieldset>
  );
}

export default Content;
