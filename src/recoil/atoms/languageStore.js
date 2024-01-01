import { atom } from 'recoil';

export const languageState = atom({
  key: 'languageState', // 고유한 키
  default: 'KOR', // 기본값
});
