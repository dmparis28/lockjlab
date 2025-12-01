// Filename: app/components/CaseStudies.jsx
import React from 'react';
import Link from 'next/link';

const ArrowUpIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
  </svg>
);

const PredictionStrikeLogo = () => (
  <div className="flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
      <path d="m12 3-9 9 9 9 9-9Z" /><path d="M3 12h18" />
    </svg>
    <span className="text-xl font-bold tracking-wider uppercase text-gray-800 dark:text-gray-200">PredictionStrike</span>
  </div>
);

const featuredCaseStudy = {
  companyLogo: <PredictionStrikeLogo />,
  headline: "How we designed the world's first sports stock exchange.",
  description: "PredictionStrike came to us to design and build PredictionStrike \"2.0.\" We provided UI/UX design, information architecture, site mapping, responsive design, and front-end development.",
  imageUrl: 'https://placehold.co/380x780/1A1D23/FFFFFF/png?text=App+UI',
  link: '/work',
  launchStats: {
    period: '2 months after launch',
    metrics: [
      { value: '3637%', label: 'average number of sessions per user' },
      { value: '1305%', label: 'total number of deposits over $100' },
      { value: '423%', label: 'conversion rate of users from sign up to purchase' },
      { value: '101%', label: 'average number of deposits per user' },
      { value: '81%', label: 'number of users with over 30 minute long sessions' },
      { value: '71%', label: 'number of users with over 60 events per session' },
    ],
  },
};

const CaseStudies = () => {
  const { companyLogo, headline, description, imageUrl, link, launchStats } = featuredCaseStudy;

  return (
    <section className="bg-gray-100 dark:bg-gray-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Made by Guru
          </h2>
          <Link
            href="/work"
            className="text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-2 group whitespace-nowrap"
          >
            See more of our work
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

        {/* Main Case Study Card */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="flex flex-col gap-6">
              {companyLogo}
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                {headline}
              </h3>
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
                {description}
              </p>
              <div className="mt-4">
                <Link
                  href={link}
                  className="inline-block bg-pink-600 text-white font-semibold rounded-lg px-8 py-3 text-center transition-transform hover:scale-105"
                >
                  Read the case study <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Column: App Image */}
            <div className="flex items-center justify-center">
              <img
                src={imageUrl}
                alt="App screenshot"
                className="rounded-3xl max-h-[500px] object-contain"
              />
            </div>
          </div>

          {/* Launch Stats Section */}
          <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-semibold tracking-widest text-gray-500 dark:text-gray-400 uppercase">
              {launchStats.period}
            </h4>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {launchStats.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="flex items-center gap-2">
                    <ArrowUpIcon className="h-10 w-10 text-green-500" />
                    <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {metric.value}
                    </span>
                  </div>
                  <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
