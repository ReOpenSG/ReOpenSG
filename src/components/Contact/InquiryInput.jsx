import PropTypes from 'prop-types';
import React from 'react';
import styles from './Contact.module.css';
import ProductIcon from './icons/ProductIcon';
import PurchaseIcon from './icons/PurchaseIcon';
import ASIcon from './icons/ASIcon';
import EtcIcon from './icons/EtcIcon';

function InquiryInput({
  type, id, name, defaultValue, labelText,
}) {
  return (
    <div className="focus-within:ring-2 focus-within:ring-[#3B82F6] rounded-[20px]">
      <input
        type={type}
        id={id}
        name={name}
        defaultValue={defaultValue}
        className={styles.inquiryInput}
      />
      <label htmlFor={id} className={styles.inquiryLabel}>
        {labelText === '제품 문의' ? (
          <ProductIcon />
        ) : labelText === '구매 문의' ? (
          <PurchaseIcon />
        ) : labelText === 'AS 문의' ? (
          <ASIcon />
        ) : (
          <EtcIcon />
        )}
        <span>{labelText}</span>
      </label>
    </div>
  );
}

InquiryInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default InquiryInput;
