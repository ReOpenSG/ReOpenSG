import React from 'react';
import Group from '@/components/About/Group';
import BannerImage from '@/components/About/BannerImage';
import Vision from '@/components/About/Vision';
import Ci from '@/components/About/Ci';
import TitleSection from '@/components/Common/TitleSection';

function About() {
  return (
    <div className="w-full">
      <TitleSection
        category="회사 개요"
        title="We Are OpenSG"
        background="bg-[url('@/assets/aboutUs_background.png')]"
        textAlign="text-center"
      />
      <Group />
      <BannerImage />
      <Vision />
      <Ci />
    </div>
  );
}

export default About;
