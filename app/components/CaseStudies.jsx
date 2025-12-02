// Filename: app/components/CaseStudies.jsx
import Link from 'next/link';
import Icon from './Icon';

const stats = [
  { value: '+3637%', label: 'Sessions per User' },
  { value: '+1305%', label: 'Deposits over $100' },
  { value: '+2478%', label: 'App Store Rating' },
  { value: '+890%', label: 'User Retention' },
  { value: '+1200%', label: 'Revenue Growth' },
  { value: '45 min', label: 'Presale Sellout' },
];

export default function CaseStudies() {
  return (
    <section className="bg-[#0B0F19] py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-900/5 to-transparent" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sky-400 font-semibold tracking-wider uppercase text-sm">Featured Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Results That Speak
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See how we have helped our clients achieve extraordinary outcomes.
          </p>
        </div>

        {/* Featured Case Study */}
        <article className="group relative bg-gradient-to-br from-pink-600/10 to-pink-900/5 rounded-3xl border border-pink-500/20 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
            {/* Content */}
            <div className="flex flex-col justify-center">
              <img
                src="https://placehold.co/200x60/1e293b/94a3b8?text=PredictionStrike"
                alt="PredictionStrike"
                className="h-10 mb-6 opacity-80 w-fit"
              />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The world&apos;s first athlete stock exchange
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We designed and developed PredictionStrike 2.0, transforming how fans invest in their favorite athletes. The result? Record-breaking engagement and growth.
              </p>
              <Link
                href="/work"
                className="inline-flex items-center text-pink-400 hover:text-pink-300 font-semibold transition-colors group/link w-fit"
              >
                View Case Study
                <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-pink-600/20 to-purple-600/20 border border-white/10">
                <img
                  src="https://placehold.co/800x600/1e293b/94a3b8?text=PredictionStrike+App"
                  alt="PredictionStrike App"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="bg-black/30 border-t border-white/10 px-8 lg:px-12 py-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Icon name="TrendingUp" className="w-4 h-4 text-green-400" />
                    <span className="text-xl font-bold text-white">{stat.value}</span>
                  </div>
                  <span className="text-xs text-gray-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/work"
            className="inline-flex items-center bg-white/5 hover:bg-white/10 text-white font-medium py-3 px-6 rounded-lg border border-white/10 transition-all group"
          >
            View All Case Studies
            <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
