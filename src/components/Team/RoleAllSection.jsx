import React from 'react';
import { roleData } from '@/data/teamData';
import RoleCard from './RoleCard';

function RoleAllSection() {
  const data = Object.entries(roleData);

  return (
    <>
      {data.map((list) => list[1].map((item) => (
        <RoleCard
          src={item.img}
          alt={item.team}
          title={item.team}
          text={item.desc}
          key={item.team}
        />
      )))}
    </>
  );
}

export default RoleAllSection;
