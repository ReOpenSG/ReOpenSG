import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import mapImage from '@/assets/location_map.png';
import LocationPinIcon from '@/components/Location/LocationPinIcon';
import mTowerImage from '@/assets/location_mTower.png';
import LocationContainer from '@/components/Location/LocationContainer';
import styles from '@/styles/styles.module.css';
import TitleSection from '@/components/Common/TitleSection';

function Location() {
  AOS.init({ once: true });
  return (
    <div className={styles.location}>
      <TitleSection
        category="오시는 길"
        title="세계로 보는 OpenSG"
        background="-bg--openfoundation-primary"
        textAlign="text-center"
      />
      <div className={styles.mapContainer}>
        <img data-aos="fade-in" data-aos-delay="100" data-aos-duration="2000" className={styles.mapImage} src={mapImage} alt="세계지도" />
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
            locationLink="https://maps.app.goo.gl/TGzErogM6Cg5aTny8"
            delay="0"
          />
          <LocationContainer
            locationName="자동화 연구소"
            locationPostal="우 31094)"
            locationAddress="충청남도 천안시 서북구 백석동 1206 천안미래에이스하이테크시티 406호"
            locationTel="041-566-2612"
            locationFax="041-566-2613"
            locationLink="https://maps.app.goo.gl/uR3KbjmXAYLqC93E7"
            delay="20"
          />
          <LocationContainer
            locationName="OpenSG USA INC"
            locationAddress="2180 Satellite Blvd Suite 400-02, Duluth, GA 30097"
            locationTel="TBD"
            locationFax="TBD"
            locationLink="https://maps.app.goo.gl/9LVCL9tcsmi3Qdds8"
            delay="40"
          />
        </div>
      </section>
    </div>
  );
}

export default Location;
