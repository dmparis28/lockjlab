// Filename: app/careers/page.jsx
import Link from 'next/link';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';

export const metadata = {
  title: 'Careers | Lock J Lab',
  description: 'Join our team of talented designers, developers, and strategists. Build meaningful products and grow your career.',
};

const values = [
  {
    icon: 'Target',
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in everything we create.',
  },
  {
    icon: 'Users',
    title: 'Collaboration',
    description: 'The best work happens when diverse perspectives come together.',
  },
  {
    icon: 'Lightbulb',
    title: 'Innovation',
    description: 'We embrace new technologies and approaches to solve complex problems.',
  },
  {
    icon: 'Heart',
    title: 'Impact',
    description: 'We build products that make a real difference in peoples lives.',
  },
];

const benefits = [
  { icon: 'Globe', title: 'Remote-First', description: 'Work from anywhere in the world' },
  { icon: 'Calendar', title: 'Flexible Hours', description: 'Design your own schedule' },
  { icon: 'TrendingUp', title: 'Growth Budget', description: '$2,000/year for learning' },
  { icon: 'Heart', title: 'Health Insurance', description: 'Comprehensive coverage' },
  { icon: 'Monitor', title: 'Equipment', description: 'Latest tools and hardware' },
  { icon: 'Users', title: 'Team Retreats', description: 'Annual company gatherings' },
];

const openings = [
  {
    title: 'Senior Product Designer',
    department: 'Design',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Lead design for complex product challenges and mentor junior designers.',
  },
  {
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Build scalable web applications using React, Node.js, and cloud technologies.',
  },
  {
    title: 'Product Strategist',
    department: 'Strategy',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Help clients define product vision and go-to-market strategies.',
  },
  {
    title: 'Mobile Developer (React Native)',
    department: 'Engineering',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Build cross-platform mobile apps for iOS and Android.',
  },
  {
    title: 'UX Researcher',
    department: 'Design',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Conduct user research and translate insights into actionable recommendations.',
  },
];

export default function CareersPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <PageHero
        tag="Careers"
        icon="Briefcase"
        title="Build Your Career,"
        titleHighlight="Build Amazing Products"
        description="Join a team of talented designers, developers, and strategists working on meaningful products for innovative companies."
        size="lg"
      />

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              These principles guide everything we do and shape who we hire.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex p-4 rounded-xl bg-sky-500/10 border border-sky-500/20 mb-4">
                  <Icon name={value.icon} className="w-8 h-8 text-sky-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Join Us</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We invest in our team with competitive benefits and a supportive culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start p-6 rounded-xl bg-[#111827] border border-white/10"
              >
                <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/20 mr-4">
                  <Icon name={benefit.icon} className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-400 text-lg">
              {"Find your next opportunity. Don't see a fit? We're always looking for talented people."}
            </p>
          </div>
          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="group p-6 rounded-xl bg-[#111827] border border-white/10 hover:border-sky-500/30 transition-colors cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-sky-400 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-gray-400 mt-1">{job.description}</p>
                    <div className="flex flex-wrap gap-3 mt-3">
                      <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-gray-300">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-gray-300">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-gray-300">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="flex items-center text-sky-400 font-medium">
                      Apply
                      <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application CTA */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {"Don't See the Right Role?"}
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            {"We're always interested in meeting talented people. Send us your resume and let's chat."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center shadow-lg hover:shadow-xl hover:shadow-sky-500/30 group border border-sky-500/50"
            >
              Send Your Resume
              <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg border border-white/20 transition duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
