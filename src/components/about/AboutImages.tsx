import React from 'react';

const AboutImages = () => {
  return (
    <div className="relative h-[800px]">
      <img 
        src="https://static.wixstatic.com/media/8c7d69_a030207f15184cf4ba4daefeb5dedfde~mv2.png/v1/fill/w_440,h_292,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AdobeStock_814821139.png"
        alt="Fitness Equipment"
        className="absolute top-0 right-0 w-[500px] h-[400px] object-cover rounded-lg"
      />
      <img 
        src="https://static.wixstatic.com/media/8c7d69_a030207f15184cf4ba4daefeb5dedfde~mv2.png/v1/fill/w_440,h_292,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AdobeStock_814821139.png"
        alt="Yoga Pose"
        className="absolute bottom-0 left-0 w-[600px] h-[500px] object-cover rounded-lg"
      />
    </div>
  );
};

export default AboutImages;