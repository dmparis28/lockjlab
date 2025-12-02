// Filename: app/work/page.jsx
import Link from 'next/link';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';

export const metadata = {
  title: 'Our Work | App Guru',
  description: 'Explore our portfolio of successful digital products. See how we have helped startups and enterprises achieve their goals.',
};

const caseStudies = [
  {
    id: 'predictionstrike',
    company: 'PredictionStrike',
    title: 'The world\'s first athlete stock exchange',
    description: 'We designed and developed PredictionStrike 2.0, creating an immersive sports investment platform that revolutionized fan engagement.',
    image: 'https://placehold.co/800x600/1e293b/94a3b8?text=PredictionStrike',
    tags: ['UI/UX Design', 'Web Development', 'Mobile App'],
    stats: [
      { value: '+3637%', label: 'Sessions per user' },
      { value: '+1305%', label: 'Deposits over $100' },
    ],
    color: 'from-pink-600/20 to-pink-800/10',
    accent: 'border-pink-500/30',
  },
  {
    id: 'wwf',
    company: 'World Wildlife Fund',
    title: 'Driving conservation through digital innovation',
    description: 'We redesigned WWF\'s digital donation experience, creating a seamless journey that increased online contributions significantly.',
    image: 'https://placehold.co/800x600/1e293b/94a3b8?text=WWF',
    tags: ['UI/UX Design', 'Web Development', 'Accessibility'],
    stats: [
      { value: '+30%', label: 'Online donations' },
      { value: '+45%', label: 'User engagement' },
    ],
    color: 'from-green-600/20 to-green-800/10',
    accent: 'border-green-500/30',
  },
  {
    id: 'kabata',
    company: 'Kabata',
    title: 'AI-powered smart fitness equipment',
    description: 'We partnered with Kabata to design and develop their connected fitness platform, from concept to successful product launch.',
    image: 'https://placehold.co/800x600/1e293b/94a3b8?text=Kabata',
    tags: ['Product Strategy', 'UI/UX Design', 'IoT Integration'],
    stats: [
      { value: '45min', label: 'Presale sellout' },
      { value: '$2M+', label: 'Pre-orders' },
    ],
    color: 'from-orange-600/20 to-orange-800/10',
    accent: 'border-orange-500/30',
  },
  {
    id: 'tgs',
    company: 'TGS',
    title: 'Energy data and intelligence leader',
    description: 'We transformed TGS\'s digital presence with a modern web experience that dramatically improved user engagement and conversions.',
    image: 'https://placehold.co/800x600/1e293b/94a3b8?text=TGS',
    tags: ['Web Development', 'Data Visualization', 'CMS'],
    stats: [
      { value: '+425%', label: 'Page views' },
      { value: '+200%', label: 'Lead generation' },
    ],
    color: 'from-blue-600/20 to-blue-800/10',
    accent: 'border-blue-500/30',
  },
  {
    id: 'medspal',
    company: 'MedsPal',
    title: 'Non-profit medical database',
    description: 'We helped MedsPal create an accessible platform for patients to find medication assistance programs worldwide.',
    image: 'https://placehold.co/800x600/1e293b/94a3b8?text=MedsPal',
    tags: ['UI/UX Design', 'Web Development', 'Accessibility'],
    stats: [
      { value: '+250%', label: 'Site engagement' },
      { value: 'WHO', label: 'Partnership' },
    ],
    color: 'from-sky-600/20 to-sky-800/10',
    accent: 'border-sky-500/30',
  },
  {
    id: 'angelfire',
    company: 'AngelFire',
    title: 'Socially-immersive sports gaming',
    description: 'We designed and developed a mobile app that combines sports fandom with social gaming for an engaging user experience.',
    image: 'https://placehold.co/800x600/1e293b/94a3b8?text=AngelFire',
    tags: ['Mobile App', 'UI/UX Design', 'Gamification'],
    stats: [
      { value: '4.8/5', label: 'App rating' },
      { value: '1000s', label: 'Downloads' },
    ],
    color: 'from-purple-600/20 to-purple-800/10',
    accent: 'border-purple-500/30',
  },
];

export default function WorkPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <PageHero
        tag="Our Work"
        icon="FolderOpen"
        title="Case Studies &"
        titleHighlight="Success Stories"
        description="Explore our portfolio of successful digital products. See how we have helped startups and enterprises achieve measurable results."
        size="lg"
      />

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <article
                key={study.id}
                className={`group rounded-2xl overflow-hidden bg-gradient-to-br ${study.color} border ${study.accent} hover:shadow-2xl transition-all duration-300`}
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">{study.company}</p>
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-gray-400 mb-6">{study.description}</p>
                  
                  {/* Stats */}
                  <div className="flex gap-8 mb-6">
                    {study.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-sky-400 font-medium group-hover:gap-2 transition-all">
                    Read Case Study
                    <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            {"Let's discuss how we can help you achieve similar results for your business."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center shadow-lg hover:shadow-xl hover:shadow-sky-500/30 group border border-sky-500/50"
            >
              Start Your Project
              <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg border border-white/20 transition duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
