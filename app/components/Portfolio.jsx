// Filename: app/components/Portfolio.jsx
import Link from 'next/link';
import Icon from './Icon';

const projects = [
  {
    company: 'Kabata',
    title: 'AI-powered smart fitness equipment',
    description: 'We helped Kabata design and launch their connected fitness platform, resulting in a 45-minute presale sellout and over $2M in pre-orders.',
    image: 'https://placehold.co/600x400/1e293b/94a3b8?text=Kabata',
    tags: ['Product Strategy', 'UI/UX Design', 'IoT'],
    color: 'from-orange-600/10 to-orange-900/5',
    border: 'border-orange-500/20',
    accent: 'text-orange-400',
  },
  {
    company: 'World Wildlife Fund',
    title: 'Driving conservation through digital',
    description: 'We redesigned WWF\'s digital donation experience, creating a seamless journey that increased online contributions by 30%.',
    image: 'https://placehold.co/600x400/1e293b/94a3b8?text=WWF',
    tags: ['UI/UX Design', 'Web Development', 'Accessibility'],
    color: 'from-green-600/10 to-green-900/5',
    border: 'border-green-500/20',
    accent: 'text-green-400',
  },
];

export default function Portfolio() {
  return (
    <section className="bg-[#0B0F19] py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sky-400 font-semibold tracking-wider uppercase text-sm">More Projects</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
            Featured Work
          </h2>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.company}
              className={`group bg-gradient-to-br ${project.color} rounded-2xl border ${project.border} overflow-hidden`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content - alternates sides */}
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">{project.company}</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  
                  <Link
                    href="/work"
                    className={`inline-flex items-center ${project.accent} hover:opacity-80 font-semibold transition-opacity group/link w-fit`}
                  >
                    View Case Study
                    <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[3/2] rounded-xl overflow-hidden bg-black/20">
                    <img
                      src={project.image}
                      alt={project.company}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
