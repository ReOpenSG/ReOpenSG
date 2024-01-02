import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguaeDetector from 'i18next-browser-languagedetector';
import * as en from './en';
import * as ko from './ko';
const resources = {
  ENG: {
    ...en,
  },
  KOR: {
    ...ko,
  },
};

i18n
  .use(LanguaeDetector) // 사용자 언어 탐지
  .use(initReactI18next) // i18n 객체를 react-18next에 전달
  .init({
    // for all options read: https://www.i18next.com/overview/configuration-options
    resources,
    debug: true,
    lng: 'KOR', // 초기 설정 언어
    fallbackLng: {
      ENG: ['ENG'], // 한국어 불러오는 것이 실패했을 경우 영문을 써라 라는 말입니다.
      default: ['KOR'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
