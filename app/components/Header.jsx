// Filename: app/components/Header.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { workData, servicesData, clientsData, resourcesData, aboutData } from '../data/navdata.js';
import SidebarMegaMenu from './SideBarMegaMenu';
import Icon from './Icon';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const getInitialSubMenu = (menu) => {
      let data;
      switch (menu) {
        case 'work': data = workData; break;
        case 'services': data = servicesData; break;
        case 'clients': data = clientsData; break;
        case 'resources': data = resourcesData; break;
        case 'about': data = aboutData; break;
        default: data = null;
      }
      return data?.sidebar?.[0]?.id || null;
    };
    setActiveSubMenu(getInitialSubMenu(activeMenu));
  }, [activeMenu]);

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);
  const handleSubMenuEnter = (subMenuId) => setActiveSubMenu(subMenuId);

  const getCurrentMenuData = () => {
    switch (activeMenu) {
      case 'work': return workData;
      case 'services': return servicesData;
      case 'clients': return clientsData;
      case 'resources': return resourcesData;
      case 'about': return aboutData;
      default: return null;
    }
  };

  const menuLinks = {
    work: '/work',
    services: '/services',
    clients: '#',
    resources: '/resources',
    about: '/about',
  };

  const currentData = getCurrentMenuData();

  return (
    <header 
      className="sticky top-0 z-50 bg-[#0B0F19]/80 backdrop-blur-lg border-b border-white/10"
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">App Guru</span>
          </Link>
          
          {/* Main Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['work', 'services', 'clients', 'resources', 'about'].map(menu => (
              <div key={menu} onMouseEnter={() => handleMouseEnter(menu)} className="relative group py-8">
                <Link 
                  href={menuLinks[menu]}
                  className={`text-gray-300 transition-colors capitalize font-medium ${
                    activeMenu === menu ? 'text-white' : 'group-hover:text-white'
                  }`}
                >
                  {menu}
                </Link>
                {/* Dynamic Underline Effect */}
                <span className={`absolute bottom-7 left-0 h-0.5 bg-sky-500 transition-all duration-300 ease-in-out ${
                  activeMenu === menu ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <Link 
            href="/contact"
            className="hidden md:block bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-2 px-6 rounded-lg border border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300"
          >
            Let's Talk!
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} className="w-6 h-6" />
          </button>
        </nav>
      </div>

      {/* Mega Menu Container */}
      <div 
        className={`absolute left-0 w-full bg-[#111827] border-t border-white/10 shadow-2xl transition-all duration-200 ease-out ${
          activeMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.03) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          {currentData && activeSubMenu && (
            <SidebarMegaMenu 
              data={currentData} 
              activeSubMenu={activeSubMenu} 
              onSubMenuEnter={handleSubMenuEnter} 
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111827] border-t border-white/10">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {['work', 'services', 'clients', 'resources', 'about'].map(menu => (
              <Link
                key={menu}
                href={menuLinks[menu]}
                className="block text-gray-300 hover:text-white capitalize font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {menu}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full text-center bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let's Talk!
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
