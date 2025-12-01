// Filename: app/components/PageHero.jsx
import React from 'react';
import Icon from './Icon';

/**
 * Reusable PageHero component for internal pages
 * Follows the same design language as the main Hero
 * 
 * @param {string} tag - Small tag text above the title (optional)
 * @param {string} title - Main heading text
 * @param {string} titleHighlight - Highlighted portion of title (gradient text)
 * @param {string} description - Subheading description
 * @param {string} icon - Icon name from Icon component (optional)
 * @param {boolean} centered - Center align content (default: true)
 * @param {string} size - 'sm' | 'md' | 'lg' (default: 'md')
 */
const PageHero = ({ 
  tag, 
  title, 
  titleHighlight, 
  description, 
  icon,
  centered = true,
  size = 'md',
  children 
}) => {
  const sizeClasses = {
    sm: {
      section: 'pt-24 pb-12 md:pt-28 md:pb-16',
      title: 'text-3xl md:text-4xl',
      description: 'text-base md:text-lg max-w-2xl',
    },
    md: {
      section: 'pt-28 pb-16 md:pt-32 md:pb-20',
      title: 'text-4xl md:text-5xl',
      description: 'text-lg max-w-3xl',
    },
    lg: {
      section: 'pt-32 pb-20 md:pt-40 md:pb-28',
      title: 'text-5xl md:text-6xl',
      description: 'text-lg md:text-xl max-w-3xl',
    },
  };

  const classes = sizeClasses[size] || sizeClasses.md;

  return (
    <section className={`bg-[#0B0F19] ${classes.section} relative overflow-hidden`}>
      {/* Background Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-50"
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.03) 1px, transparent 0)`, 
          backgroundSize: '40px 40px'
        }}
      />

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="w-[600px] h-[600px] bg-sky-900/20 rounded-full blur-[150px] opacity-70" />
      </div>
      
      <div className={`container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 ${centered ? 'text-center' : ''}`}>
        {/* Tag */}
        {tag && (
          <div className={`mb-4 inline-flex items-center bg-gray-800/50 border border-sky-500/30 py-1 px-4 rounded-full text-sm font-medium text-sky-400 backdrop-blur-sm ${centered ? 'mx-auto' : ''}`}>
            {icon && <Icon name={icon} className="w-4 h-4 mr-2" />}
            {tag}
          </div>
        )}

        {/* Title */}
        <h1 className={`${classes.title} font-extrabold text-white mb-6 leading-tight ${centered ? 'mx-auto' : ''}`}>
          {title}
          {titleHighlight && (
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              {titleHighlight}
            </span>
          )}
        </h1>

        {/* Description */}
        {description && (
          <p className={`${classes.description} text-gray-400 ${centered ? 'mx-auto' : ''}`}>
            {description}
          </p>
        )}

        {/* Optional children (CTAs, etc.) */}
        {children && (
          <div className={`mt-10 ${centered ? 'flex justify-center' : ''}`}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
