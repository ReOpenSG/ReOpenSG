import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import BannerSection from '@/components/Common/BannerSection';
import ContentsSection from '@/components/Community/ContentsSection';

function CommunityDetail() {
  const location = useLocation();

  const params = useParams();
  const [notices, setNotices] = useState([]);
  const [currentNotice, setCurrentNotice] = useState(null);
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(-1);
  const [nextNotice, setNextNotice] = useState(null);
  const [prevNotice, setPrevNotice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { currentNotice: locationNotice, notices: totalNotices } = location.state || {};
      if (locationNotice) {
        setCurrentNotice(locationNotice);
        const noticeIndex = totalNotices.findIndex((n) => n?.id === params?.id);
        setCurrentNoticeIndex(noticeIndex);
        const next = noticeIndex > 0 ? totalNotices[noticeIndex - 1] : null;
        const prev = noticeIndex < totalNotices.length - 1 ? totalNotices[noticeIndex + 1] : null;

        setNotices(totalNotices);
        setNextNotice(next);
        setPrevNotice(prev);
      }
    };

    fetchData();
  }, [location.state, params.id]);

  return (
    <div className="mb-open-5xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-gutter-mobile">
      <BannerSection category="Support" title="커뮤니티" />
      <ContentsSection
        notices={notices}
        currentNotice={currentNotice}
        params={params}
        nextNotice={nextNotice}
        prevNotice={prevNotice}
      />
    </div>
  );
}

export default CommunityDetail;
