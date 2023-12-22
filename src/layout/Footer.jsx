import React from 'react';
import ContactUsSection from '@/components/Footer/ContactUsSection';
import OfficeInfoSection from '@/components/Footer/OfficeInfoSection';
import Side from '@/components/Footer/Side';

function Footer() {
  return (
    <>
      <footer>
        <h2 className="sr-only">Footer</h2>
        <ContactUsSection />
        <OfficeInfoSection />
      </footer>
      <Side />
    </>
  );
}

export default Footer;
