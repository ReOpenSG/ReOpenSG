import React from 'react';
import PropTypes from 'prop-types';
import styles from './Community.module.css';

function InputSection({
  title,
  setTitle,
  content,
  setContent,
  imagePreview,
  setImagePreview,
  selectedFile,
  setSelectedFile,
}) {
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }

    setSelectedFile(file);

    const fileNameInput = document.getElementById('fileName');
    if (fileNameInput) {
      fileNameInput.value = file ? file.name : '첨부파일';
    }
  };
  return (
    <>
      <span className="sr-only">커뮤니티 폼 입력 섹션</span>
      <div className={styles.titleWrapper}>
        <input
          type="text"
          placeholder="제목을 입력하세요."
          className={styles.title}
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          {imagePreview ? (
            <>
              <img src={imagePreview} alt="이미지 미리보기" className={styles.imagePreview} />
              <label htmlFor="file" className={styles.imageLabel}>
                이미지 변경
              </label>
            </>
          ) : (
            <>
              <input
                type="text"
                value={selectedFile ? selectedFile.name : '첨부파일'}
                id="fileName"
                placeholder="첨부파일"
                onChange={() => {}}
                className={styles.imageInput}
              />
              <label htmlFor="file" className={styles.imageLabel}>
                파일 찾기
              </label>
            </>
          )}
          <input type="file" id="file" onChange={handleFileChange} className="w-0 h-0" />
        </div>
        <textarea
          placeholder="내용을 입력해주세요."
          rows={10}
          className={styles.contentText}
          value={content}
          onChange={handleContent}
        />
      </div>
    </>
  );
}
export default InputSection;

InputSection.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  setContent: PropTypes.func.isRequired,
  imagePreview: PropTypes.string.isRequired,
  setImagePreview: PropTypes.func.isRequired,
  selectedFile: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  setSelectedFile: PropTypes.func.isRequired,
};
