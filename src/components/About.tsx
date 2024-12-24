import React from 'react';
import Container from './layout/Container';
import JoinTeam from './about/JoinTeam';
import AboutImages from './about/AboutImages';
import EmailSection from './about/EmailSection';
import KaiLogo from './mission/KaiLogo';

const About = () => {
  return (
    <div className="min-h-screen bg-[#f5f0eb] py-20 relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <JoinTeam />
          <AboutImages />
        </div>
        <EmailSection />
      </Container>
      <KaiLogo className="absolute bottom-8 right-8" />
    </div>
  );
};

export default About;