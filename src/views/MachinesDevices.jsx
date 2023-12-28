import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CradsWrapper from '@/components/MachinesDevices/CradsWrapper';
import machinesData from '@/data/machinesData';
import devicesData from '@/data/devicesData';
import Desc from '@/components/MachinesDevices/Desc';
import FuncChar from '@/components/MachinesDevices/FuncChar';
import TitleSection from '@/components/Common/TitleSection';
import styles from '@/styles/styles.module.css';

function MachinesDevices() {
  const [data, setData] = useState({});
  const [desc, setDesc] = useState({ types: {}, product: '' });
  const [currentLocation, setCurrentLocation] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    const isMachines = location.pathname.includes('machines');
    setData(isMachines ? machinesData : devicesData);
    setCurrentLocation(isMachines ? 'machines' : 'devices');
  }, [location]);

  useEffect(() => {
    if (data && Object.values(data).length > 0) {
      const filteredData = Object.entries(data).find((item) => item[1][id]);

      if (filteredData) {
        setDesc((prev) => ({
          ...prev,
          types: filteredData[1][id],
          product: filteredData[0],
        }));
      }
    }
  }, [data, id]);

  const titleProps = location.pathname.includes('machines')
    ? { category: 'Open Smart Machine', title: '자동화의 시작과 끝,', subTitle: 'Smart Machine' }
    : { category: 'Open Device', title: '미래를 여는', subTitle: '오픈 디바이스' };

  return (
    <div className={styles.machinesDevice}>
      <TitleSection
        {...titleProps}
        background="bg-[url('@/assets/products_background.png')]"
        textAlign="text-left"
      />
      <CradsWrapper data={data} currentLocation={currentLocation} />
      <Desc
        descProps={desc}
        id={id}
        currentLocation={currentLocation}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <FuncChar descProps={desc} id={id} selectedProduct={selectedProduct} />
    </div>
  );
}

export default MachinesDevices;
