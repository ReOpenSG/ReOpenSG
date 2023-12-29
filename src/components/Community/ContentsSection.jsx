import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { deleteObject, ref } from 'firebase/storage';
import { toast } from 'react-toastify';
import { useRecoilValue } from 'recoil';
import { PropTypes } from 'prop-types';
import { db, storage } from '../../../firebase';
import { isLoggedInState } from '@/recoil/atoms/authStore';
import styles from '@/styles/styles.module.css';

function ContentsSection({ currentNotice, nextNotice, prevNotice, notices, params }) {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const updatedAtDate = currentNotice?.data?.updatedAt
    ? new Date(
        currentNotice.data.updatedAt.seconds * 1000 +
          currentNotice.data.updatedAt.nanoseconds / 1000000,
      )
    : null;

  const formattedDate = updatedAtDate?.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const handleEdit = () => {
    navigate(`/community/${currentNotice?.id}/edit`, {
      state: { currentNotice, notices },
    });
  };
  const handleDelete = async () => {
    try {
      const currentDocRef = doc(db, 'community', params.id);
      const currentDocSnapshot = await getDoc(currentDocRef);

      await deleteDoc(currentDocRef);

      if (currentDocSnapshot.exists()) {
        const { imageUrl } = currentDocSnapshot.data();
        if (imageUrl) {
          const storageRef = ref(storage, `images/community/${params.id}`);
          await deleteObject(storageRef);
        }
      }

      toast.success('글이 삭제되었습니다.');

      navigate('/community');
    } catch (error) {
      toast.error('글 삭제 중 오류가 발생했습니다.');
    }
  };

  const handleComeback = () => {
    navigate('/community');
  };
  if (!currentNotice) {
    return <div>Loading...</div>;
  }
  return (
    <section className={styles.detailWrapper}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>{currentNotice?.data?.title}</h3>
        <time className={styles.updatedAt} dateTime={formattedDate}>
          {formattedDate}
        </time>
      </div>
      <div className={styles.buttonWrapper}>
        {isLoggedIn ? (
          <>
            <button
              type="button"
              className={`${styles.button} ${styles.editButton}`}
              onClick={handleEdit}
            >
              수정
            </button>
            <button
              type="button"
              className={`${styles.button} ${styles.deleteButton}`}
              onClick={handleDelete}
            >
              삭제
            </button>
          </>
        ) : (
          ''
        )}
      </div>
      <div className={styles.contentWrapper}>
        <img
          src={currentNotice?.data?.imageUrl}
          alt={currentNotice?.data?.title}
          className={styles.imagePreview}
        />
        <p className={styles.contentText}>{currentNotice?.data?.content}</p>
      </div>
      <ul className={styles.navWrapper}>
        <li className={styles.list}>
          {nextNotice ? (
            <NavLink
              to={`/community/${nextNotice?.id}`}
              state={{ currentNotice: nextNotice, notices }}
              className="flex gap-open-lg"
            >
              <span className="font-semibold">&uarr; &nbsp; 다음 글</span>
              <span>{nextNotice?.data?.title}</span>
            </NavLink>
          ) : (
            <NavLink
              to="#"
              className="flex gap-open-lg"
              onClick={() => toast('다음 글이 없습니다.')}
            >
              {' '}
              <span className="font-semibold">&uarr; &nbsp; 다음 글</span>
              {nextNotice && <span>{nextNotice?.data?.title}</span>}
              {!nextNotice && <span>다음 글이 없습니다.</span>}
            </NavLink>
          )}
        </li>
        <li className={styles.list}>
          {prevNotice ? (
            <NavLink
              to={`/community/${prevNotice?.id}`}
              state={{ currentNotice: prevNotice, notices }}
              className="flex gap-open-lg"
            >
              <span className="font-semibold">&darr; &nbsp; 이전 글</span>
              <span>{prevNotice?.data?.title}</span>
            </NavLink>
          ) : (
            <NavLink
              to="#"
              className="flex gap-open-lg"
              onClick={() => toast('이전 글이 없습니다.')}
            >
              {' '}
              <span className="font-semibold">&darr; &nbsp; 이전 글</span>
              {prevNotice && <span>{prevNotice?.data?.title}</span>}
              {!prevNotice && <span>이전 글이 없습니다.</span>}
            </NavLink>
          )}
        </li>
      </ul>
      <button type="button" className={styles.comebackButton} onClick={handleComeback}>
        {' '}
        <span className="block font-open-highlight">목록으로</span>
        <span className="font-extralight">&gt; </span> &nbsp;{' '}
      </button>
    </section>
  );
}

export default ContentsSection;

ContentsSection.propTypes = {
  currentNotice: PropTypes.shape({
    id: PropTypes.string,
    data: PropTypes.shape({
      index: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      imageUrl: PropTypes.string,
      updatedAt: PropTypes.objectOf({
        seconds: PropTypes.number,
        nanoseconds: PropTypes.number,
      }),
    }).isRequired,
  }),
  nextNotice: PropTypes.shape({
    id: PropTypes.string,
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
  }),
  prevNotice: PropTypes.shape({
    id: PropTypes.string,
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
  }),
  notices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      data: PropTypes.shape({
        index: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string,
        imageUrl: PropTypes.string,
        updatedAt: PropTypes.shape({
          seconds: PropTypes.number,
          nanoseconds: PropTypes.number,
        }),
      }).isRequired,
    }),
  ).isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

ContentsSection.defaultProps = {
  currentNotice: {
    id: '',
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
  },
  nextNotice: {
    id: '',
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
  },
  prevNotice: {
    id: '',
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
  },
};
