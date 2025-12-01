// Filename: app/components/Hero.jsx
import React from 'react';
import Link from 'next/link';
import Icon from './Icon';
import HeroVisuals from './HeroVisuals';

const Hero = () => {
  return (
    <section className="bg-[#0B0F19] pt-10 pb-20 md:pt-16 md:pb-32 relative overflow-hidden">
      
      {/* Background Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-50"
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.03) 1px, transparent 0)`, 
          backgroundSize: '40px 40px'
        }}
      />

      {/* Background Glow (Aura) */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="w-[800px] h-[800px] bg-sky-900/20 rounded-full blur-[150px] opacity-70" />
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="mb-4 inline-flex items-center bg-gray-800/50 border border-sky-500/30 py-1 px-4 rounded-full text-sm font-medium text-sky-400 backdrop-blur-sm">
              <Icon name="Zap" className="w-4 h-4 mr-2" />
              Strategy. Design. Development.
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Products, 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                Engineered to Scale.
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0">
              App Guru transforms complex challenges into high-performance applications. We are your dedicated partners for expert strategy, design, and development that drives measurable results.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {/* Primary CTA */}
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center shadow-lg hover:shadow-xl hover:shadow-sky-500/30 group border border-sky-500/50"
              >
                Book a Consultation
                <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
              </Link>
              
              {/* Secondary CTA */}
              <Link 
                href="/process" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg border border-white/20 transition duration-300"
              >
                Our Process
              </Link>
            </div>
          </div>

          {/* Right Column: Video */}
          <div className="lg:col-span-7 hidden lg:block relative w-full">
            <HeroVisuals />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
