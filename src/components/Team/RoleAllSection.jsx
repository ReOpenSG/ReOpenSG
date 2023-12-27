import React from 'react';
import { v4 as uuid } from 'uuid';
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
          key={uuid()}
        />
      )))}
    </>
  );
}

export default RoleAllSection;
