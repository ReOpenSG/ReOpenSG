import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

function Agreement({ state, setState }) {
  const handleChangeCheck = () => {
    setState(!state);
  };

  return (
    <fieldset className={styles.agreementText}>
      <h3>개인정보 활용동의</h3>
      <p>
        OpenSG는 개인정보보호법 및 관련 법령에 의거 고객님들의 의견 접수와 관련한 성실한 답변을
        드리기 위해 필요한 최소한의 개인정보를 아래와 같이 수집, 이용하고자 합니다.
      </p>
      <ol className={styles.agreementOl}>
        <li>
          필수정보의 수집 목적 : 온라인 상담실을 통한 정보주체의 의견접수 및 문의에 대한 답변/안내
        </li>
        <li>필수 수집 항목 : 이름, 이메일 주소</li>
        <li>보유 및 이용기간 : 상담 신청 후 1년</li>
        <li className={styles.warning}>
          ※ 고객님께서는 본 동의를 거부하실 수 있으나 거부 시 필수정보의 수집 목적에 해당하는 사항의
          처리가 제한될 수 있습니다.
        </li>
      </ol>
      <div className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          id="agreement"
          required
          checked={state}
          onChange={handleChangeCheck}
          className="peer"
        />
        <label htmlFor="agreement" className="pl-open-lg">
          (필수) 위 개인정보 수집 및 이용에 동의합니다.
        </label>
      </div>
    </fieldset>
  );
}

Agreement.propTypes = {
  state: PropTypes.bool.isRequired,
  setState: PropTypes.func.isRequired,
};

export default Agreement;
