import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import PropTypes from 'prop-types';
import { db, storage } from '../../firebase';
import BannerSection from '@/components/Common/BannerSection';
import InputSection from '@/components/Community/InputSection';
import ButtonSection from '@/components/Community/ButtonSection';

function CommunityForm({ isEditing = false, data = null }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentNotice, notices } = location.state || {};
  const { id } = useParams();
  useEffect(() => {
    if (isEditing && data) {
      setTitle(data.title);
      setContent(data.content);
      setImagePreview(data.imageUrl);
    }
  }, [isEditing, currentNotice]);

  const handleSave = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'community'));
      const index = querySnapshot.size > 0 ? querySnapshot.size - 1 : 0;

      if (isEditing) {
        const updateRef = doc(db, 'community', id);
        await updateDoc(updateRef, {
          title,
          content,
          updatedAt: serverTimestamp(),
        });

        if (selectedFile) {
          const storageRef = ref(storage, `images/community/${id}`);
          await uploadBytes(storageRef, selectedFile);
          const downloadURL = await getDownloadURL(storageRef);

          await updateDoc(updateRef, {
            imageUrl: downloadURL,
          });
        }

        toast.success('글이 수정되었습니다.');

        const updatedDocSnapshot = await getDoc(updateRef);
        const updatedData = updatedDocSnapshot.data();

        navigate(`/community/${id}`, {
          state: {
            notices,
            currentNotice: {
              id,
              data: updatedData,
            },
          },
        });
      } else {
        const docRef = await addDoc(collection(db, 'community'), {
          index,
          title,
          content,
          imageUrl: null,
          updatedAt: serverTimestamp(),
        });
        let downloadURL;

        if (selectedFile) {
          const storageRef = ref(storage, `images/community/${docRef.id}`);
          await uploadBytes(storageRef, selectedFile);
          downloadURL = await getDownloadURL(storageRef);

          const updateRef = doc(db, 'community', docRef.id);
          await updateDoc(updateRef, {
            imageUrl: downloadURL,
          });
        }

        const updatedNotices = [
          ...notices,
          {
            id: docRef.id,
            data: {
              index,
              title,
              content,
              imageUrl: selectedFile ? downloadURL : null,
              updatedAt: serverTimestamp(),
            },
          },
        ];

        toast.success('글이 등록되었습니다.');
        const newDocSnapshot = await getDoc(docRef);
        const newData = newDocSnapshot.data();

        navigate(`/community/${docRef.id}`, {
          state: {
            notices: updatedNotices?.slice().toSorted((a, b) => b.data.index - a.data.index),
            currentNotice: {
              id: docRef.id,
              data: newData,
            },
          },
        });
      }
    } catch (error) {
      toast.error('변경 실패하였습니다. 다시 한번 확인해주세요.');
    }
  };

  return (
    <div className="mb-open-5xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-gutter-mobile">
      <BannerSection category="Support" title="커뮤니티" />
      <div className="flex flex-col px-open-gutter-mobile desktop:px-open-gutter-desktop ">
        <InputSection
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
        />
        <ButtonSection isEditing={isEditing} handleSave={handleSave} />
      </div>
    </div>
  );
}

export default CommunityForm;

CommunityForm.propTypes = {
  isEditing: PropTypes.bool,
  data: PropTypes.shape({
    index: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    imageUrl: PropTypes.string,
    updatedAt: PropTypes.shape({
      seconds: PropTypes.number,
      nanoseconds: PropTypes.number,
    }),
  }),
};

CommunityForm.defaultProps = {
  isEditing: false,
  data: {
    index: 0,
    title: '',
    content: '',
    imageUrl: '',
    updatedAt: {
      seconds: 0,
      nanoseconds: 0,
    },
  },
};
