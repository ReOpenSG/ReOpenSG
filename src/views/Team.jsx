import React, { useState } from 'react';
import styles from '@/components/Team/Team.module.css';
import TeamLnb from '@/components/Team/TeamLnb';
import { roleData } from '@/data/teamData';
import RoleSection from '@/components/Team/RoleSection';
import TitleSection from '@/components/Common/TitleSection';

function Team() {
  const data = Object.entries(roleData);
  const [category, setCategory] = useState('전체');

  return (
    <div className={styles.teamWrapper}>
      <TitleSection
        category="직무소개"
        title="OPENSG의 업무"
        background="bg-[url('@/assets/aboutUs_background.svg')]"
        textAlign="text-center"
      />
      <div className={styles.teamContainer}>
        <div className={styles.sectionWrapper}>
          <TeamLnb data={data} state={category} setState={setCategory} />
          <RoleSection data={data} state={category} />
        </div>
      </div>
    </div>
  );
}

export default Team;
