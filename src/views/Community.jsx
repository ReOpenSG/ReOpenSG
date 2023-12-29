import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { db } from '../../firebase';
import BannerSection from '@/components/Common/BannerSection';
import NoticeSection from '@/components/Community/NoticeSection';
import { isLoggedInState } from '@/recoil/atoms/authStore';
import styles from '@/styles/styles.module.css';

function Community() {
  const [notices, setNotices] = useState([]);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'community'));
        const noticesData = [];

        querySnapshot.forEach((doc) => {
          noticesData.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setNotices(noticesData);
      } catch (error) {
        toast.error(error);
      }
    };

    fetchData();
  }, []);

  const sortedNotices = notices?.slice().toSorted((a, b) => b.data.index - a.data.index);

  const handleWrite = () => {
    navigate('write', { state: { notices: sortedNotices } });
  };
  return (
    <div className={styles.community}>
      <BannerSection category="Support" title="커뮤니티" />
      {isLoggedIn ? (
        <div
          className="flex w-full animate-bounce
      justify-end
      p-open-gutter-mobile tablet:p-open-gutter-desktop  desktop:p-open-gutter-desktop"
        >
          <button
            type="button"
            className="rounded-md bg-slate-400 p-open-lg text-open-font-medium -text--openfoundation-black tablet:p-open-xl tablet:text-open-font-large desktop:p-open-xl desktop:text-open-font-xl"
            onClick={handleWrite}
          >
            글쓰러 가기
          </button>
        </div>
      ) : (
        ''
      )}
      <NoticeSection sortedNotices={sortedNotices} />
    </div>
  );
}

export default Community;
