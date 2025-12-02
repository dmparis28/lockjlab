// Filename: app/resources/page.jsx
import Link from 'next/link';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';

export const metadata = {
  title: 'Resources | App Guru',
  description: 'Explore our blog, guides, templates, and tools to help you build better digital products.',
};

const featuredPost = {
  title: 'How to Choose the Right AI Software Development Company in 2025',
  excerpt: 'If you choose the wrong AI software development company, it can seriously derail your project. Here is our comprehensive guide to making the right choice.',
  image: 'https://placehold.co/1200x600/1e293b/94a3b8?text=AI+Development+Guide',
  category: 'Guide',
  readTime: '12 min read',
  date: 'Nov 15, 2025',
};

const blogPosts = [
  {
    title: 'The Complete Guide to UX Audits (And Why They Matter More Than Ever)',
    excerpt: 'User experience is make-or-break. Learn how to conduct effective UX audits.',
    image: 'https://placehold.co/600x400/1e293b/94a3b8?text=UX+Audit',
    category: 'Design',
    readTime: '8 min read',
  },
  {
    title: 'App Guru Expands UX and Accessibility Services',
    excerpt: 'Announcing our expanded services to empower nonprofits with better digital experiences.',
    image: 'https://placehold.co/600x400/1e293b/94a3b8?text=Company+News',
    category: 'News',
    readTime: '3 min read',
  },
  {
    title: 'Scaling Your SaaS: Infrastructure Best Practices',
    excerpt: 'Learn how to design and implement scalable infrastructure for your growing SaaS.',
    image: 'https://placehold.co/600x400/1e293b/94a3b8?text=SaaS+Scaling',
    category: 'Engineering',
    readTime: '10 min read',
  },
  {
    title: 'The Ultimate Guide to MVP Development in 2025',
    excerpt: 'A step-by-step playbook for launching your minimum viable product successfully.',
    image: 'https://placehold.co/600x400/1e293b/94a3b8?text=MVP+Guide',
    category: 'Strategy',
    readTime: '15 min read',
  },
  {
    title: 'Designing for Accessibility (WCAG 2.1)',
    excerpt: 'Ensure your digital products are inclusive and accessible to all users.',
    image: 'https://placehold.co/600x400/1e293b/94a3b8?text=Accessibility',
    category: 'Design',
    readTime: '7 min read',
  },
  {
    title: 'React Native vs Flutter: Which to Choose in 2025',
    excerpt: 'A comprehensive comparison to help you pick the right mobile framework.',
    image: 'https://placehold.co/600x400/1e293b/94a3b8?text=Mobile+Dev',
    category: 'Engineering',
    readTime: '9 min read',
  },
];

const templates = [
  {
    title: 'Product Requirements Document (PRD) Template',
    description: 'Kickstart your project with our proven PRD template.',
    icon: 'FileCode',
    type: 'Google Docs',
  },
  {
    title: 'Competitor Analysis Spreadsheet',
    description: 'A structured spreadsheet to analyze your competitors.',
    icon: 'BarChart3',
    type: 'Google Sheets',
  },
  {
    title: 'UX Audit Checklist',
    description: 'A comprehensive checklist to evaluate user experience.',
    icon: 'CheckCircle',
    type: 'PDF',
  },
  {
    title: 'Sprint Planning Template',
    description: 'Organize your agile sprints effectively.',
    icon: 'Calendar',
    type: 'Notion',
  },
];

const categories = ['All', 'Strategy', 'Design', 'Engineering', 'News'];

export default function ResourcesPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <PageHero
        tag="Resources"
        icon="BookOpen"
        title="Insights, Guides &"
        titleHighlight="Free Resources"
        description="Learn from our expertise. Explore articles, guides, and templates to help you build better digital products."
        size="lg"
      />

      {/* Featured Post */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="group relative rounded-2xl overflow-hidden bg-[#111827] border border-white/10 hover:border-sky-500/30 transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-400 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sky-400 font-medium">
                  Read Article
                  <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-sky-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="group rounded-xl overflow-hidden bg-[#111827] border border-white/10 hover:border-sky-500/30 transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 rounded bg-white/10 text-xs font-medium text-gray-300">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Free Templates & Tools</h2>
            <p className="text-gray-400 text-lg">Download our battle-tested templates to accelerate your projects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template) => (
              <div
                key={template.title}
                className="group p-6 rounded-xl bg-[#111827] border border-white/10 hover:border-sky-500/30 transition-colors cursor-pointer"
              >
                <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/20 w-fit mb-4">
                  <Icon name={template.icon} className="w-6 h-6 text-sky-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">
                  {template.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{template.description}</p>
                <span className="text-xs text-gray-500">{template.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <Icon name="Mail" className="w-12 h-12 text-sky-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-8">
            Get the latest insights, guides, and resources delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
