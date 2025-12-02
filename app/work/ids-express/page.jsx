// Filename: app/work/ids-express/page.jsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Icon from '../../components/Icon';

export default function IDSExpressCaseStudy() {
  const [step, setStep] = useState('landing');
  const [phone, setPhone] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [verificationCode, setVerificationCode] = useState('');

  const plans = [
    { id: 'basic', name: 'Express Wash', price: 19.99, features: ['Exterior wash', 'Spot-free rinse', 'Air dry'], color: 'cyan' },
    { id: 'plus', name: 'Express Plus', price: 29.99, features: ['Everything in Express', 'Tire shine', 'Interior vacuum'], color: 'blue', popular: true },
    { id: 'unlimited', name: 'Unlimited VIP', price: 49.99, features: ['Everything in Plus', 'Unlimited washes', 'Priority lane', 'Free detailing'], color: 'purple' },
  ];

  const stats = [
    { value: '+85%', label: 'Member Signups' },
    { value: '+120%', label: 'Recurring Revenue' },
    { value: '4.9', label: 'App Store Rating' },
    { value: '< 30s', label: 'Signup Time' },
    { value: '95%', label: 'Member Retention' },
    { value: '50K+', label: 'Active Members' },
  ];

  return (
    <div className="bg-[#0B0F19] min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-transparent" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/work" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
            Back to Work
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/images/logos/ids-express.png" alt="IDS Express Car Wash" className="h-12 w-auto" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Membership-driven car wash experience
              </h1>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We built a frictionless membership platform for IDS Express Car Wash that transformed their business model from single transactions to recurring revenue. The result? 85% increase in member signups and 120% growth in monthly recurring revenue.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Platforms</p>
                  <p className="text-white font-medium">Web, SMS Integration</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Deliverables</p>
                  <p className="text-white font-medium">Strategy, UI/UX, Development</p>
                </div>
              </div>

              <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                Visit IDS Express <Icon name="ArrowUpRight" className="w-5 h-5 ml-2" />
              </a>
            </div>

            {/* Hero Mockup */}
            <div className="relative flex justify-center">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
                <div className="flex justify-center mb-6">
                  <img src="/images/logos/ids-express.png" alt="IDS Express" className="h-12 w-auto" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">IDS Car Wash Membership</h2>
                <p className="text-gray-500 text-sm mb-6">We&apos;ll send you a text to verify your phone and get you on your way.</p>
                
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden mb-4">
                  <div className="flex items-center gap-2 px-3 py-3 bg-gray-50 border-r border-gray-200">
                    <span>🇺🇸</span>
                    <span className="text-gray-600 text-sm">US</span>
                    <Icon name="ChevronDown" className="w-4 h-4 text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Mobile phone number"
                    className="flex-1 px-3 py-3 outline-none text-gray-900"
                  />
                </div>
                
                <button className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-3 rounded-lg transition-colors">
                  Continue →
                </button>

                <div className="text-center mt-4">
                  <p className="text-gray-500 text-sm">Need help getting started?</p>
                  <a href="#" className="text-cyan-500 text-sm hover:underline">Contact support</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#111827] border-y border-white/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm mb-8">Results 6 months after launch</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {stat.value.startsWith('+') && <Icon name="TrendingUp" className="w-5 h-5 text-cyan-400" />}
                  <span className="text-3xl md:text-4xl font-bold text-white">{stat.value}</span>
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">From transactions to relationships</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            IDS Express Car Wash was successful, but like many car washes, they relied heavily on drive-by traffic and one-time purchases. The challenge? Convert occasional visitors into loyal members who generate predictable, recurring revenue.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            The existing signup process required customers to download an app, create an account, enter payment information, and verify their vehicle—a process that took 5+ minutes and had a 70% abandonment rate.
          </p>
          
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
            <h3 className="text-cyan-400 font-semibold mb-4">Our Solution</h3>
            <p className="text-gray-400 leading-relaxed">
              We built a phone-first membership system. Customers enter their phone number, receive an instant verification text, select a plan, and they&apos;re done. No app download, no lengthy forms. The entire process takes less than 30 seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Membership Demo */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interactive Membership Flow</h2>
            <p className="text-gray-400 text-lg">Experience the 30-second signup process we designed</p>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-[320px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
                <div className="w-full bg-white rounded-[2.5rem] overflow-hidden min-h-[600px]">
                  {/* Status Bar */}
                  <div className="bg-white px-6 py-2 flex items-center justify-between">
                    <span className="text-black text-sm font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 bg-black rounded-sm"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {step === 'landing' && (
                      <div className="animate-fade-in">
                        <div className="flex justify-center mb-6">
                          <img src="/images/logos/ids-express.png" alt="IDS Express" className="h-10 w-auto" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">IDS Car Wash Membership</h2>
                        <p className="text-gray-500 text-sm mb-6">We&apos;ll send you a text to verify your phone and get you on your way.</p>
                        
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden mb-4">
                          <div className="flex items-center gap-2 px-3 py-3 bg-gray-50 border-r border-gray-200">
                            <span>🇺🇸</span>
                            <span className="text-gray-600 text-sm">US</span>
                          </div>
                          <input 
                            type="tel" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="(555) 123-4567"
                            className="flex-1 px-3 py-3 outline-none text-gray-900"
                          />
                        </div>
                        
                        <button 
                          onClick={() => setStep('verify')}
                          className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-3 rounded-lg transition-colors"
                        >
                          Continue →
                        </button>

                        <div className="text-center mt-4">
                          <p className="text-gray-500 text-sm">Need help getting started?</p>
                          <a href="#" className="text-cyan-500 text-sm">Contact support</a>
                        </div>
                      </div>
                    )}

                    {step === 'verify' && (
                      <div className="animate-fade-in">
                        <button onClick={() => setStep('landing')} className="mb-4">
                          <Icon name="ArrowLeft" className="w-5 h-5 text-gray-600" />
                        </button>
                        
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Verify your number</h2>
                        <p className="text-gray-500 text-sm mb-6">Enter the 6-digit code sent to {phone || '(555) 123-4567'}</p>
                        
                        <div className="flex gap-2 justify-center mb-6">
                          {[0,1,2,3,4,5].map((i) => (
                            <input
                              key={i}
                              type="text"
                              maxLength={1}
                              className="w-10 h-12 border-2 border-gray-200 rounded-lg text-center text-xl font-bold text-gray-900 focus:border-cyan-400 outline-none"
                              value={verificationCode[i] || ''}
                              onChange={(e) => {
                                const newCode = verificationCode.split('');
                                newCode[i] = e.target.value;
                                setVerificationCode(newCode.join(''));
                              }}
                            />
                          ))}
                        </div>
                        
                        <button 
                          onClick={() => setStep('plans')}
                          className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-3 rounded-lg transition-colors"
                        >
                          Verify
                        </button>

                        <p className="text-center text-gray-500 text-sm mt-4">
                          Didn&apos;t receive code? <span className="text-cyan-500">Resend</span>
                        </p>
                      </div>
                    )}

                    {step === 'plans' && (
                      <div className="animate-fade-in">
                        <button onClick={() => setStep('verify')} className="mb-4">
                          <Icon name="ArrowLeft" className="w-5 h-5 text-gray-600" />
                        </button>
                        
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Choose your plan</h2>
                        <p className="text-gray-500 text-sm mb-4">Select a membership that works for you</p>
                        
                        <div className="space-y-3 mb-4">
                          {plans.map((plan) => (
                            <button
                              key={plan.id}
                              onClick={() => setSelectedPlan(plan.id)}
                              className={`w-full p-4 rounded-xl border-2 text-left transition-all relative ${selectedPlan === plan.id ? 'border-cyan-400 bg-cyan-50' : 'border-gray-200 hover:border-gray-300'}`}
                            >
                              {plan.popular && (
                                <span className="absolute -top-2 right-4 bg-cyan-400 text-white text-xs px-2 py-0.5 rounded-full font-medium">Popular</span>
                              )}
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-gray-900">{plan.name}</span>
                                <span className="font-bold text-gray-900">${plan.price}<span className="text-gray-500 text-sm font-normal">/mo</span></span>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {plan.features.slice(0, 2).map((f, i) => (
                                  <span key={i} className="text-xs text-gray-500">{f}{i < 1 && ' •'}</span>
                                ))}
                              </div>
                            </button>
                          ))}
                        </div>
                        
                        <button 
                          onClick={() => setStep('success')}
                          disabled={!selectedPlan}
                          className={`w-full py-3 rounded-lg font-semibold transition-colors ${selectedPlan ? 'bg-cyan-400 hover:bg-cyan-500 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                        >
                          Continue →
                        </button>
                      </div>
                    )}

                    {step === 'success' && (
                      <div className="animate-fade-in text-center py-8">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                          <Icon name="CheckCircle" className="w-10 h-10 text-green-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to IDS Express!</h2>
                        <p className="text-gray-500 mb-6">Your membership is now active. Show this screen at the wash to get started.</p>
                        
                        <div className="bg-gray-100 rounded-xl p-4 mb-6">
                          <p className="text-gray-500 text-sm mb-2">Member ID</p>
                          <p className="text-2xl font-mono font-bold text-gray-900">IDS-{Math.random().toString(36).substr(2, 8).toUpperCase()}</p>
                        </div>

                        <div className="bg-cyan-50 rounded-xl p-4 mb-6 text-left">
                          <p className="font-semibold text-cyan-700 mb-2">{plans.find(p => p.id === selectedPlan)?.name}</p>
                          <p className="text-cyan-600 text-sm">${plans.find(p => p.id === selectedPlan)?.price}/month</p>
                        </div>
                        
                        <button 
                          onClick={() => { setStep('landing'); setSelectedPlan(null); setPhone(''); setVerificationCode(''); }}
                          className="text-cyan-500 font-medium"
                        >
                          Start Over (Demo)
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
            </div>
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center gap-4 mt-8">
            {['landing', 'verify', 'plans', 'success'].map((s, i) => (
              <button
                key={s}
                onClick={() => setStep(s)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${step === s ? 'bg-cyan-500 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}
              >
                {i + 1}. {s === 'landing' ? 'Phone' : s === 'verify' ? 'Verify' : s === 'plans' ? 'Plan' : 'Done'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Key features we built</h2>
          <p className="text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto">
            Every feature was designed to maximize conversion and minimize friction
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Phone-First Signup', desc: 'No app download required. Members sign up instantly via mobile web with SMS verification.', icon: 'Smartphone' },
              { title: 'Smart Plan Recommendations', desc: 'AI suggests the best plan based on usage patterns and location visit frequency.', icon: 'Zap' },
              { title: 'License Plate Recognition', desc: 'Cameras automatically identify member vehicles—no need to scan anything.', icon: 'Car' },
              { title: 'Family Plans', desc: 'Add multiple vehicles under one membership with easy management.', icon: 'Users' },
              { title: 'Instant Plan Changes', desc: 'Upgrade, downgrade, or pause membership anytime with one tap.', icon: 'RefreshCw' },
              { title: 'Usage Analytics', desc: 'Members see their wash history, savings, and environmental impact.', icon: 'BarChart2' },
            ].map((feature) => (
              <div key={feature.title} className="bg-[#111827] rounded-xl p-6 border border-white/5 hover:border-cyan-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                  <Icon name={feature.icon} className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Development journey</h2>
          
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-cyan-400 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Customer Research</h3>
                <p className="text-gray-400 leading-relaxed">
                  We interviewed 100+ car wash customers and analyzed signup abandonment data. The #1 reason for drop-off? &quot;Too many steps.&quot; Customers wanted to sign up while waiting in line.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-cyan-400 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">SMS-First Architecture</h3>
                <p className="text-gray-400 leading-relaxed">
                  Built the entire authentication system around phone numbers. Integrated with Twilio for instant verification and created a web app that works perfectly on any mobile browser.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-cyan-400 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">POS Integration</h3>
                <p className="text-gray-400 leading-relaxed">
                  Connected the membership system directly with the car wash point-of-sale and license plate recognition cameras. Members are identified automatically—no scanning required.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-cyan-400 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Launch &amp; Iteration</h3>
                <p className="text-gray-400 leading-relaxed">
                  Soft-launched at one location, gathered feedback, and iterated rapidly. Within 3 months, rolled out to all IDS Express locations with 85% higher signup rates than the old system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to grow recurring revenue?</h2>
          <p className="text-gray-400 text-lg mb-8">Let&apos;s discuss how we can build a membership system for your business.</p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
          >
            Start a Project
            <Icon name="ArrowRight" className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <style jsx>{`
        .animate-fade-in { animation: fadeIn 0.3s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}
