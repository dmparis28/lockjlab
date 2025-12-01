// Filename: app/components/Portfolio.jsx
import React from 'react';
import Link from 'next/link';

const projects = [
  {
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">K</span>
        </div>
        <span className="text-xl font-bold text-gray-900 dark:text-white">Kabata</span>
      </div>
    ),
    title: 'An AI-powered smart dumbbell revolutionizing home fitness.',
    description: 'We partnered with Kabata to design and develop their connected fitness platform, resulting in a sold-out presale within 45 minutes and $2M+ in pre-orders.',
    imageUrl: 'https://placehold.co/800x600/1e293b/94a3b8?text=Kabata+Dashboard',
    link: '/work',
  },
  {
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">W</span>
        </div>
        <span className="text-xl font-bold text-gray-900 dark:text-white">World Wildlife Fund</span>
      </div>
    ),
    title: 'Driving conservation through digital innovation.',
    description: 'We redesigned WWF\'s digital donation experience, achieving a 30% increase in online contributions and improving user engagement across all platforms.',
    imageUrl: 'https://placehold.co/800x600/1e293b/94a3b8?text=WWF+Platform',
    link: '/work',
  },
];

const Portfolio = () => {
  return (
    <div className="bg-gray-50 dark:bg-[#0B0F19] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
            A selection of our most impactful work across industries.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <article 
              key={project.title} 
              className={`group relative isolate flex flex-col gap-8 lg:flex-row ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`relative flex-1 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className="flex flex-col justify-center h-full max-w-xl">
                  {project.logo}
                  <h3 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="mt-8">
                    <Link 
                      href={project.link} 
                      className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group-hover:border-indigo-500"
                    >
                      Read the case study
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <img
                  src={project.imageUrl}
                  alt={`Screenshot of the ${project.title} project`}
                  className="aspect-[4/3] w-full rounded-2xl bg-gray-100 dark:bg-gray-800 object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
