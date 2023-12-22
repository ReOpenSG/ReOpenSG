/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuLink from '@/components/Header/MenuLink';
import Sitemap from '@/components/Header/Sitemap';
import opensgLogo from '@/assets/header_opensg.png';
import styles from '@/components/Header/Header.module.css';
import hamburger from '@/components/Header/Hamburger.module.css';

function Header() {
  const [whitePage, setWhitePage] = useState(null);
  const [isHeaderBlack, setIsHeaderBlack] = useState(false); //
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeLanguage, setActiveLanguage] = useState(null);
  const [activeBurger, setActiveBurger] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLanguageActive = (lang) => {
    setActiveLanguage(lang);
  };

  const handleMenuActive = (menu) => {
    setActiveMenu(menu);
    setIsHeaderBlack(true);
    if (menu === null) {
      setIsHeaderBlack(false);
    }
  };

  const handleBurgerActive = (active) => {
    setActiveBurger(active);
    if (active) {
      setIsSitemapOpen(true);
    } else {
      setIsSitemapOpen(false);
    }
  };

  useEffect(() => {
    handleMenuActive(null);
    setIsHeaderBlack(false);
    setIsSitemapOpen(false);
    setActiveBurger(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === '/community' || location.pathname === '/library' || location.pathname === '/contact') {
      setWhitePage(true);
    } else {
      setWhitePage(false);
    }
  }, [location]);

  useEffect(() => {
    if (isSitemapOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSitemapOpen]);

  return (
    <header
      role="banner"
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${whitePage ? styles.headerBlack : ''} ${isHeaderBlack ? styles.headerBlack : ''}`}
    >
      <h1 className="sr-only">
        오픈에스지
      </h1>
      <nav className="flex">
        <ul className="flex justify-center items-center gap-open-gutter-mobile desktop:gap-open-gutter-desktop">
          <li>
            <Link className="px-open-md py-open-sm" to="/"><img className="w-[60px] tablet:w-[100px] desktop:w-[100px] mr-open-2xl" src={opensgLogo} alt="오픈에스지" /></Link>
          </li>
          {!isSitemapOpen && (
            <li className="px-open-md py-open-sm desktop:block tablet:block hidden" onMouseEnter={() => handleMenuActive('AboutUs')}>
              <button className={styles.menuLink} type="button" onClick={() => handleMenuActive('AboutUs')}>About Us</button>
              {activeMenu === 'AboutUs' && (
              <div className="absolute left-0 top-[80px] w-full backdrop-blur-[2px]" ref={menuRef} onMouseLeave={() => handleMenuActive(null)}>
                <ul className={`${styles.headerMenu} ${styles.about}`}>
                  <MenuLink linkName="회사개요" linkAddress="/about" />
                  <MenuLink linkName="연혁" linkAddress="/history" />
                  <MenuLink linkName="직무소개" linkAddress="/team" />
                  <MenuLink linkName="오시는길" linkAddress="/location" />
                </ul>
              </div>
              )}
            </li>
          )}
          {!isSitemapOpen && (
          <li className="px-open-md py-open-sm desktop:block tablet:block hidden" onMouseEnter={() => handleMenuActive('Products')}>
            <button className={styles.menuLink} type="button" onClick={() => handleMenuActive('Products')}>Service & Solution</button>
            {activeMenu === 'Products' && (
            <div className="absolute left-0 top-[80px] w-full backdrop-blur-[2px]" ref={menuRef} onMouseLeave={() => handleMenuActive(null)}>
              <ul className={`${styles.headerMenu} ${styles.product}`}>
                <li>
                  Solutions
                  <ul className="font-open-paragraph flex flex-col pt-open-lg gap-open-lg">
                    <li className="text-open-font-medium ">
                      <div className="-text--open-accent-accent-1">
                        Equipment Control System
                      </div>
                      <ul className="flex flex-col pt-open-md gap-open-md text-open-font-medium">
                        <MenuLink linkName="ACS/FMS" tooltip="AGV Control System / Fleet Management System" linkAddress="solutions/ACS" />
                        <MenuLink linkName="OCS" tooltip="OHT Control System" linkAddress="solutions/OCS" />
                        <MenuLink linkName="SCS" tooltip="Stocker Control System" linkAddress="solutions/SCS" />
                        <MenuLink linkName="CCS" tooltip="Conveyor Control System" linkAddress="solutions/CCS" />
                        <MenuLink linkName="IDX Controller" tooltip="Index Control System" linkAddress="solutions/IDX Controller" />
                      </ul>
                    </li>
                    <li className="text-open-font-medium ">
                      <div className="-text--open-accent-accent-1">
                        Smart Tools
                      </div>
                      <ul className="flex flex-col pt-open-md gap-open-md text-open-font-medium  ">
                        <MenuLink linkName="Map Designer" linkAddress="solutions/Map Designer" />
                        <MenuLink linkName="ACS Simulator" tooltip="AGV Control System Simulator" linkAddress="solutions/ACS Simulator" />
                        <MenuLink linkName="SCS Simulator" tooltip="Stocker Control System Simulator" linkAddress="solutions/SCS Simulator" />
                      </ul>
                    </li>
                    <li className="text-open-font-medium ">
                      <div className="-text--open-accent-accent-1 -text-">
                        Monitoring Solution
                      </div>
                      <ul className="flex flex-col pt-open-md gap-open-md text-open-font-medium ">
                        <MenuLink linkName="AIMS" tooltip="Advanced Integrated Monitoring Solution" linkAddress="solutions/AIMS" />
                      </ul>
                    </li>
                    <li className="text-open-font-medium ">
                      <div className="-text--open-accent-accent-1">
                        Comm Driver
                      </div>
                      <ul className="flex flex-col pt-open-md gap-open-md text-open-font-medium ">
                        <MenuLink linkName="Open HSMS" linkAddress="solutions/HSMS" />
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Smart Machine
                  <ul className="flex flex-col pt-open-md gap-open-md text-open-font-medium font-open-paragraph ">
                    <MenuLink linkName="AGV - Lift Type1" linkAddress="/machines/Lift Type1" />
                    <MenuLink linkName="AGV - Lift Type2" linkAddress="/machines/Lift Type2" />
                    <MenuLink linkName="AGV - Fork-Lift Type" linkAddress="/machines/Fork-Lift Type" />
                    <MenuLink linkName="AGV - Foup Type" linkAddress="/machines/Foup Type" />
                  </ul>
                </li>
                <li>
                  Smart Device
                  <ul className="flex flex-col pt-open-md gap-open-md text-open-font-medium font-open-paragraph ">
                    <MenuLink linkName="Microsoft Hololens 2" linkAddress="/devices/Microsoft" />
                  </ul>
                </li>
                <div className="w-[1px] -bg--openfoundation-secondary" />
                <li>
                  <div className="-text--open-accent-accent-1">
                    Industries
                  </div>
                  <ul className="flex flex-col pt-open-md gap-open-md text-open-font-medium font-open-paragraph ">
                    <MenuLink linkName="반도체" linkAddress="/industries/semiconductor" />
                    <MenuLink linkName="디스플레이" linkAddress="/industries/display" />
                    <MenuLink linkName="2차전지" linkAddress="/industries/battery" />
                    <MenuLink linkName="항만" linkAddress="/industries/port" />
                  </ul>
                </li>
              </ul>
            </div>
            )}
          </li>
          )}
          {!isSitemapOpen && (
          <li className="px-open-md py-open-sm desktop:block tablet:block hidden" onMouseEnter={() => handleMenuActive('Support')}>
            <button className={styles.menuLink} type="button" onClick={() => handleMenuActive('Support')}>Support</button>
            {activeMenu === 'Support' && (
            <div className="absolute left-0 top-[80px] w-full backdrop-blur-[2px]" ref={menuRef} onMouseLeave={() => handleMenuActive(null)}>
              <ul className={`${styles.headerMenu} ${styles.support}`}>
                <MenuLink linkName="커뮤니티" linkAddress="/community" />
                <MenuLink linkName="라이브러리" linkAddress="/library" />
                <MenuLink linkName="고객문의" linkAddress="/contact" />
              </ul>
            </div>
            )}
          </li>
          )}
        </ul>
      </nav>
      <ul className="flex justify-center items-center gap-open-gutter-mobile tablet:gap-open-gutter-desktop desktop:gap-open-gutter-desktop">
        <li className="flex justify-center items-center px-open-md py-open-sm text-open-font-small desktop:text-open-font-medium tablet:text-open-font-medium">
          <div className="flex flex-row gap-open-md">
            <button className={activeLanguage !== 'ENG' ? '' : '-text--openfoundation-tertiary'} type="button" onClick={() => handleLanguageActive('KOR')}>KOR</button>
            <div className="w-[1px] -bg--openfoundation-tertiary" />
            <button className={activeLanguage === 'ENG' ? '' : '-text--openfoundation-tertiary'} type="button" onClick={() => handleLanguageActive('ENG')}>ENG</button>
          </div>
        </li>
        <li className="flex justify-center items-center">
          <button
            type="button"
            onClick={() => handleBurgerActive(!activeBurger)}
            className={`${hamburger.burger} ${activeBurger ? hamburger.burgerOn : ''}`}
          >
            <span />
          </button>
          <Sitemap isOpen={isSitemapOpen} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
