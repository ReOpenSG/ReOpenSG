import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CradsWrapper from '@/components/MachinesDevices/CradsWrapper';
import machinesData from '@/data/machinesData';
import devicesData from '@/data/devicesData';
import Desc from '@/components/MachinesDevices/Desc';
import FuncChar from '@/components/MachinesDevices/FuncChar';
import TitleSection from '@/components/Common/TitleSection';

function MachinesDevices() {
  const [data, setData] = useState({});
  const [desc, setDesc] = useState({ types: {}, product: '' });
  const [currentLocation, setCurrentLocation] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (location.pathname.includes('machines')) {
      setData(machinesData);
      setCurrentLocation('machines');
    } else if (location.pathname.includes('devices')) {
      setData(devicesData);
      setCurrentLocation('devices');
    }
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

  return (
    <div className="w-full">
      {location.pathname.includes('machines') ? (
        <TitleSection
          category="Open Smart Machine"
          title="자동화의 시작과 끝,"
          subTitle="Smart Machine"
          background="bg-[url('@/assets/products_background.png')]"
          textAlign="text-left"
        />
      ) : (
        <TitleSection
          category="Open Device"
          title="미래를 여는"
          subTitle="오픈 디바이스"
          background="bg-[url('@/assets/products_background.png')]"
          textAlign="text-left"
        />
      )}
      <section className="w-full flex flex-col items-center">
        <section className="desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile flex flex-col items-center w-full">
          <CradsWrapper data={data} currentLocation={currentLocation} />
        </section>
        <section className="w-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile">
          <div className="w-full flex flex-col items-center">
            <Desc
              descProps={desc}
              id={id}
              currentLocation={currentLocation}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          </div>
        </section>
        <section className="-bg--open-gray-50 w-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile ">
          <div className="w-full flex flex-col items-center">
            <h4 className="sr-only">기능 및 특징</h4>
            <FuncChar descProps={desc} id={id} selectedProduct={selectedProduct} />
          </div>
        </section>
      </section>
    </div>
  );
}

export default MachinesDevices;
