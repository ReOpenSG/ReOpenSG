import React from 'react';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from './Community.module.css';

function ButtonSection({ isEditing, handleSave }) {
  const navigate = useNavigate();
  const handleCancel = () => {
    toast.done('변경을 취소했습니다.');
    navigate(-1);
  };
  return (
    <section className={styles.buttonWrapper}>
      <p className="sr-only">커뮤니티 폼 버튼 섹션</p>
      <button type="button" className={`${styles.button} bg-blue-400`} onClick={handleSave}>
        <span className="block font-medium">{isEditing ? '수정하기' : '등록하기'}</span>
      </button>
      <button type="button" className={`${styles.button} bg-red-400`} onClick={handleCancel}>
        <span className="block font-medium">취소하기</span>
      </button>
    </section>
  );
}

export default ButtonSection;

ButtonSection.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleSave: PropTypes.func.isRequired,
};
