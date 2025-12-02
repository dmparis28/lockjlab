// Filename: app/components/Hero.jsx
'use client';

import Link from 'next/link';
import Icon from './Icon';
import HeroVisuals from './HeroVisuals';

export default function Hero() {
  return (
    <section className="relative bg-[#0B0F19] pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="text-sky-400 text-sm font-medium">Digital Product Agency</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up animation-delay-100">
              We Build Digital Products That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                Drive Results
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
              From strategy to launch, we partner with ambitious teams to create apps, platforms, and experiences that users love.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-300">
              <Link
                href="/contact"
                className="group w-full sm:w-auto bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-sky-500/25 border border-sky-500/50"
              >
                <span>Start Your Project</span>
                <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/work"
                className="group w-full sm:w-auto bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border border-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <span>View Our Work</span>
                <Icon name="ArrowUpRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-white/10 animate-fade-in animation-delay-500">
              <p className="text-gray-500 text-sm mb-4">Trusted by innovative companies</p>
              <div className="flex items-center justify-center lg:justify-start gap-8 opacity-50">
                <span className="text-white font-semibold">TechCrunch</span>
                <span className="text-white font-semibold">Forbes</span>
                <span className="text-white font-semibold">Wired</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="animate-fade-in-up animation-delay-300">
            <HeroVisuals />
          </div>
        </div>
      </div>
    </section>
  );
}
