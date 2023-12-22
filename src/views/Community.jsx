import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { db } from '../../firebase';
import BannerSection from '@/components/Common/BannerSection';
import NoticeSection from '@/components/Community/NoticeSection';
import { isLoggedInState } from '@/recoil/atoms/authStore';

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
    <div className="mb-open-5xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-gutter-mobile">
      <BannerSection category="Support" part="커뮤니티" />
      {isLoggedIn ? (
        <div
          className="w-full flex justify-end
      p-open-gutter-mobile
      tablet:p-open-gutter-desktop desktop:p-open-gutter-desktop  animate-bounce"
        >
          <button
            type="button"
            className="p-open-lg tablet:p-open-xl desktop:p-open-xl text-open-font-medium tablet:text-open-font-large desktop:text-open-font-xl bg-slate-400 -text--openfoundation-black rounded-md"
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
