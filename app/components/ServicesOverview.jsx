// Filename: app/components/ServicesOverview.jsx
import React from 'react';
import Icon from './Icon';
import Link from 'next/link';

const services = [
  {
    name: 'Product Strategy',
    icon: 'Rocket',
    description: 'We define a clear product vision, analyze the market, and create a roadmap that aligns business goals with user needs, ensuring your product is set up for success from day one.',
    color: 'from-purple-600/20 to-purple-800/10', 
    accent: 'text-purple-400',
    border: 'border-purple-500/30',
    href: '/services/strategy',
  },
  {
    name: 'Design (UI/UX)',
    icon: 'Palette',
    description: 'Our design team crafts intuitive, engaging, and aesthetically pleasing interfaces. We focus on user experience research and iterative prototyping to create designs that users love.',
    color: 'from-sky-600/20 to-sky-800/10',
    accent: 'text-sky-400',
    border: 'border-sky-500/30',
    href: '/services/design',
  },
  {
    name: 'Software Development',
    icon: 'Code',
    description: 'We build robust, scalable, and maintainable applications using modern technology stacks. From MVP development to complex enterprise systems, our engineering team delivers excellence.',
    color: 'from-teal-600/20 to-teal-800/10',
    accent: 'text-teal-400',
    border: 'border-teal-500/30',
    href: '/services/development',
  },
];

const ServiceCard = ({ service }) => {
  return (
    <div className={`p-8 rounded-xl border backdrop-blur-sm bg-gradient-to-br ${service.color} ${service.border} shadow-xl hover:shadow-2xl transition-shadow duration-300 group`}>
      {/* Icon and Title */}
      <div className="flex items-center mb-6">
        <div className={`p-4 rounded-lg bg-black/20 border ${service.border}`}>
          <Icon name={service.icon} className={`w-8 h-8 ${service.accent}`} />
        </div>
        <h3 className="text-2xl font-bold text-white ml-5">{service.name}</h3>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-8 leading-relaxed">
        {service.description}
      </p>

      {/* Call to Action Link */}
      <Link 
        href={service.href} 
        className={`font-semibold text-lg ${service.accent} flex items-center group-hover:opacity-80 transition-opacity`}
      >
        Explore {service.name}
        <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

const ServicesOverview = () => {
  return (
    <section className="bg-[#0B0F19] py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="w-[1200px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] opacity-50" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            End-to-End Digital Product Creation
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            From initial concept validation to scalable deployment, App Guru provides the expertise needed at every stage of the product lifecycle. We partner with you to turn vision into reality.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
