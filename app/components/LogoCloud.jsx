// Filename: app/components/LogoCloud.jsx
import React from 'react';

const logos = [
  { name: 'PredictionStrike', src: 'https://placehold.co/150x50/FFFFFF/111827?text=P-Strike' },
  { name: 'WWF', src: 'https://placehold.co/150x50/FFFFFF/111827?text=WWF' },
  { name: 'Kabata', src: 'https://placehold.co/150x50/FFFFFF/111827?text=Kabata' },
  { name: 'TGS', src: 'https://placehold.co/150x50/FFFFFF/111827?text=TGS' },
  { name: 'AngelFire', src: 'https://placehold.co/150x50/FFFFFF/111827?text=AngelFire' },
  { name: 'Root', src: 'https://placehold.co/150x50/FFFFFF/111827?text=Root' },
];

const LogoCloud = () => {
  return (
    <section className="bg-[#111827] py-12 border-t border-b border-white/10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-gray-400 mb-8">
          Trusted by innovative startups and global enterprises
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {logos.map((logo) => (
            <div key={logo.name} className="relative h-10 w-40">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
