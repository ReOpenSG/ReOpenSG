import React from 'react';
import mapImage from '@/assets/location_map.png';
import LocationPinIcon from '@/components/Location/LocationPinIcon';
import mTowerImage from '@/assets/location_mTower.png';
import LocationContainer from '@/components/Location/LocationContainer';
import styles from '@/components/Location/Location.module.css';
import TitleSection from '@/components/Common/TitleSection';

function Location() {
  return (
    <div className={styles.wrapper}>
      <TitleSection
        category="오시는 길"
        title="세계로 보는 OpenSG"
        background="-bg--openfoundation-primary"
        textAlign="text-center"
      />
      <div className={styles.mapContainer}>
        <img className={styles.mapImage} src={mapImage} alt="세계지도" />
        <LocationPinIcon />
        <LocationPinIcon usa />
      </div>
      <section className={styles.locationSection}>
        <div className={styles.locationWrapper}>
          <LocationContainer
            locationName="본사"
            locationPostal="우 18469)"
            locationAddress="경기도 화성시 동탄첨단산업1로 51-9 엠타워 1201호"
            locationTel="031-373-2612"
            locationFax="031-377-2615"
            locationImage={mTowerImage}
            locationLink="https://maps.app.goo.gl/Lda5XHqKMYWHyQpYA"
          />
          <LocationContainer
            locationName="자동화 연구소"
            locationPostal="우 31094)"
            locationAddress="충청남도 천안시 서북구 백석동 1206 천안미래에이스하이테크시티 406호"
            locationTel="041-566-2612"
            locationFax="041-566-2613"
            locationLink="https://maps.app.goo.gl/qMbgiatVSPKXaVGUA"
          />
          <LocationContainer
            locationName="오픈에스지 미국지사"
            locationPostal="미국지사 우편번호"
            locationAddress="미국 지사 주소가 들어갈 예정입니다."
            locationTel="미국 지사 전화번호"
            locationFax="미국 지사 팩스번호"
            locationLink="https://maps.app.goo.gl/Kh6KERRkfst5Xt3f7"
          />
        </div>
      </section>
    </div>
  );
}

export default Location;
