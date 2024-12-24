import React from 'react';
import Container from './layout/Container';
import MissionHeading from './mission/MissionHeading';
import MissionContent from './mission/MissionContent';
import InstructorButton from './mission/InstructorButton';
import KaiLogo from './mission/KaiLogo';

const Mission = () => {
  return (
    <div className="min-h-screen bg-[#f5f0eb] py-20 relative">
      <Container>
        <MissionHeading />
        <MissionContent />
        <InstructorButton />
      </Container>
      <KaiLogo className="absolute bottom-8 right-8" />
    </div>
  );
};

export default Mission;