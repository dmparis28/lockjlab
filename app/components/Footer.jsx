// Filename: app/components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import Icon from './Icon';

const footerLinks = {
  services: {
    title: 'Services',
    links: [
      { name: 'Product Strategy', href: '/services/strategy' },
      { name: 'UI/UX Design', href: '/services/design' },
      { name: 'Software Development', href: '/services/development' },
      { name: 'All Services', href: '/services' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Process', href: '/process' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'Case Studies', href: '/work' },
      { name: 'Blog', href: '/resources' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'FAQ', href: '/about#faq' },
    ],
  },
};

const socialLinks = [
  { name: 'LinkedIn', icon: 'Linkedin', href: '#' },
  { name: 'Twitter', icon: 'Twitter', href: '#' },
  { name: 'Instagram', icon: 'Instagram', href: '#' },
  { name: 'GitHub', icon: 'Github', href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] border-t border-white/10">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to build something amazing?
              </h2>
              <p className="text-gray-400 text-lg max-w-xl">
                Let's discuss your project and see how we can help you achieve your goals.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center shadow-lg hover:shadow-xl hover:shadow-sky-500/30 group border border-sky-500/50"
              >
                Book a Consultation
                <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/work" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg border border-white/20 transition duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">App Guru</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              We build digital products that drive results. Strategy, design, and development — all under one roof.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-sky-500/50 transition-all"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} App Guru. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
