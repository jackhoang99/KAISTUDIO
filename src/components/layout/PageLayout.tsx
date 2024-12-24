import React from 'react';
import KaiLogo from '../mission/KaiLogo';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="relative min-h-screen">
      {children}
      <KaiLogo className="absolute bottom-8 right-8" />
    </div>
  );
};

export default PageLayout;