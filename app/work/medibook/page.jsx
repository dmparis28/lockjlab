// Filename: app/work/medibook/page.jsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Icon from '../../components/Icon';

export default function MedibookCaseStudy() {
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showBookingConfirm, setShowBookingConfirm] = useState(false);

  const doctors = [
    { id: 1, name: 'Dr. Sarah Chen', specialty: 'Cardiologist', rating: 4.9, reviews: 128, nextAvailable: 'Today', image: 'SC' },
    { id: 2, name: 'Dr. Michael Roberts', specialty: 'General Practitioner', rating: 4.8, reviews: 256, nextAvailable: 'Tomorrow', image: 'MR' },
    { id: 3, name: 'Dr. Emily Watson', specialty: 'Dermatologist', rating: 4.9, reviews: 89, nextAvailable: 'Dec 5', image: 'EW' },
    { id: 4, name: 'Dr. James Park', specialty: 'Neurologist', rating: 4.7, reviews: 167, nextAvailable: 'Dec 6', image: 'JP' },
  ];

  const appointments = [
    { doctor: 'Dr. Sarah Chen', type: 'Video Call', date: 'Today', time: '2:30 PM', status: 'upcoming' },
    { doctor: 'Dr. Michael Roberts', type: 'In Person', date: 'Dec 8', time: '10:00 AM', status: 'scheduled' },
  ];

  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

  const stats = [
    { value: '50K+', label: 'Appointments Booked' },
    { value: '98%', label: 'Patient Satisfaction' },
    { value: '500+', label: 'Healthcare Providers' },
    { value: '4.9', label: 'App Store Rating' },
    { value: '< 2min', label: 'Avg. Booking Time' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="bg-[#0B0F19] min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/work" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
            Back to Work
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Icon name="Heart" className="w-6 h-6 text-white" />
                </div>
                <span className="text-blue-400 font-semibold text-xl">MediBook</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Reimagining healthcare access for the digital age
              </h1>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                MediBook transforms how patients connect with healthcare providers. We built a comprehensive telehealth platform featuring instant booking, video consultations, prescription management, and secure medical records—all in one seamless experience.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Platforms</p>
                  <p className="text-white font-medium">iOS, Android, Web</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Deliverables</p>
                  <p className="text-white font-medium">Research, UI/UX, Development</p>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="inline-flex items-center bg-black border border-gray-700 rounded-lg px-4 py-2 hover:border-gray-500 transition-colors">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400">Download on the</div>
                    <div className="text-white font-semibold text-sm">App Store</div>
                  </div>
                </a>
                <a href="#" className="inline-flex items-center bg-black border border-gray-700 rounded-lg px-4 py-2 hover:border-gray-500 transition-colors">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="white"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400">Get it on</div>
                    <div className="text-white font-semibold text-sm">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Hero Mockup */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-sm mx-auto">
                <div className="bg-blue-500 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Good morning,</p>
                      <p className="text-white font-semibold text-lg">Alex Thompson</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white font-semibold">AT</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="bg-blue-50 rounded-xl p-4 mb-4">
                    <p className="text-blue-600 text-sm font-medium mb-2">Upcoming Appointment</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">SC</div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Dr. Sarah Chen</p>
                        <p className="text-gray-500 text-sm">Cardiologist • Video Call</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-blue-100">
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Icon name="Calendar" className="w-4 h-4" />
                        <span>Today, 2:30 PM</span>
                      </div>
                      <button className="bg-blue-500 text-white text-sm px-4 py-1.5 rounded-lg font-medium">Join Call</button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <Icon name="Calendar" className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                      <p className="text-gray-900 font-semibold">Book</p>
                      <p className="text-gray-500 text-xs">Appointment</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <Icon name="FileText" className="w-6 h-6 text-green-500 mx-auto mb-2" />
                      <p className="text-gray-900 font-semibold">Records</p>
                      <p className="text-gray-500 text-xs">Medical History</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#111827] border-y border-white/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm mb-8">Impact after 6 months</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Not just another healthcare app</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            MediBook is more than just a booking platform—it&apos;s a genuine attempt to solve the fragmentation in healthcare. In a system where patients juggle multiple providers, lose track of prescriptions, and struggle to access their own medical history, MediBook wanted to create a unified experience.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Unlike traditional apps focused on single-use cases, MediBook&apos;s team wanted to empower patients to take control of their entire healthcare journey. It was important to foster an environment where quality of care matters more than quantity of appointments.
          </p>
        </div>
      </section>

      {/* Interactive App Demo */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interactive App Demo</h2>
            <p className="text-gray-400 text-lg">Experience the MediBook patient journey</p>
          </div>

          {/* Phone Frame with Interactive Content */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-[320px] h-[680px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="bg-white px-6 py-2 flex items-center justify-between">
                    <span className="text-black text-sm font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 bg-black rounded-sm"></div>
                      <div className="w-4 h-2 bg-black rounded-sm"></div>
                      <div className="w-6 h-3 bg-black rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="h-[calc(100%-40px)] overflow-y-auto">
                    {activeScreen === 'dashboard' && (
                      <div className="animate-fade-in">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-6">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <p className="text-blue-100 text-sm">Good morning,</p>
                              <p className="text-white font-bold text-xl">Alex Thompson</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                              <span className="text-white font-bold">AT</span>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 -mt-4">
                          <div className="bg-white rounded-2xl shadow-lg p-4 mb-4">
                            <p className="text-blue-600 text-sm font-semibold mb-3">Upcoming Appointment</p>
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">SC</div>
                              <div>
                                <p className="font-semibold text-gray-900">Dr. Sarah Chen</p>
                                <p className="text-gray-500 text-sm">Cardiologist</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <Icon name="Calendar" className="w-4 h-4" />
                                <span>Today, 2:30 PM</span>
                              </div>
                              <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg font-medium">Join Call</button>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <button 
                              onClick={() => setActiveScreen('find-doctor')}
                              className="bg-blue-50 rounded-2xl p-4 text-center hover:bg-blue-100 transition-colors"
                            >
                              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-2">
                                <Icon name="Search" className="w-5 h-5 text-white" />
                              </div>
                              <p className="text-gray-900 font-semibold text-sm">Find Doctor</p>
                            </button>
                            <button 
                              onClick={() => setActiveScreen('appointments')}
                              className="bg-green-50 rounded-2xl p-4 text-center hover:bg-green-100 transition-colors"
                            >
                              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-2">
                                <Icon name="Calendar" className="w-5 h-5 text-white" />
                              </div>
                              <p className="text-gray-900 font-semibold text-sm">Appointments</p>
                            </button>
                            <button className="bg-purple-50 rounded-2xl p-4 text-center hover:bg-purple-100 transition-colors">
                              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-2">
                                <Icon name="FileText" className="w-5 h-5 text-white" />
                              </div>
                              <p className="text-gray-900 font-semibold text-sm">Records</p>
                            </button>
                            <button className="bg-orange-50 rounded-2xl p-4 text-center hover:bg-orange-100 transition-colors">
                              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mx-auto mb-2">
                                <Icon name="MessageCircle" className="w-5 h-5 text-white" />
                              </div>
                              <p className="text-gray-900 font-semibold text-sm">Messages</p>
                            </button>
                          </div>

                          <div className="bg-gray-50 rounded-2xl p-4">
                            <p className="font-semibold text-gray-900 mb-3">Health Summary</p>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-gray-500 text-sm">Last Check-up</span>
                                <span className="text-gray-900 font-medium text-sm">Sep 15, 2024</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-gray-500 text-sm">Active Prescriptions</span>
                                <span className="text-gray-900 font-medium text-sm">2</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-gray-500 text-sm">Unread Messages</span>
                                <span className="text-blue-500 font-medium text-sm">1 new</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeScreen === 'find-doctor' && (
                      <div className="animate-fade-in">
                        <div className="px-4 py-4 border-b border-gray-100 flex items-center gap-3">
                          <button onClick={() => setActiveScreen('dashboard')} className="p-2 -ml-2">
                            <Icon name="ArrowLeft" className="w-5 h-5 text-gray-600" />
                          </button>
                          <h2 className="font-bold text-gray-900 text-lg">Find a Doctor</h2>
                        </div>
                        <div className="px-4 py-4">
                          <div className="bg-gray-100 rounded-xl px-4 py-3 flex items-center gap-3 mb-4">
                            <Icon name="Search" className="w-5 h-5 text-gray-400" />
                            <input type="text" placeholder="Search by name or specialty" className="bg-transparent flex-1 outline-none text-gray-900 placeholder-gray-400" />
                          </div>
                          <p className="text-gray-500 text-sm mb-3">Available Doctors</p>
                          <div className="space-y-3">
                            {doctors.map((doctor) => (
                              <button
                                key={doctor.id}
                                onClick={() => { setSelectedDoctor(doctor); setActiveScreen('book'); }}
                                className="w-full bg-white border border-gray-200 rounded-2xl p-4 text-left hover:border-blue-300 hover:shadow-md transition-all"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">{doctor.image}</div>
                                  <div className="flex-1">
                                    <p className="font-semibold text-gray-900">{doctor.name}</p>
                                    <p className="text-gray-500 text-sm">{doctor.specialty}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                      <div className="flex items-center gap-1">
                                        <Icon name="Star" className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        <span className="text-gray-900 text-sm font-medium">{doctor.rating}</span>
                                      </div>
                                      <span className="text-gray-400 text-sm">({doctor.reviews} reviews)</span>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-green-600 text-sm font-medium">Available</p>
                                    <p className="text-gray-500 text-xs">{doctor.nextAvailable}</p>
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeScreen === 'book' && selectedDoctor && (
                      <div className="animate-fade-in">
                        <div className="px-4 py-4 border-b border-gray-100 flex items-center gap-3">
                          <button onClick={() => setActiveScreen('find-doctor')} className="p-2 -ml-2">
                            <Icon name="ArrowLeft" className="w-5 h-5 text-gray-600" />
                          </button>
                          <h2 className="font-bold text-gray-900 text-lg">Book Appointment</h2>
                        </div>
                        <div className="px-4 py-4">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">{selectedDoctor.image}</div>
                            <div>
                              <p className="font-bold text-gray-900 text-lg">{selectedDoctor.name}</p>
                              <p className="text-gray-500">{selectedDoctor.specialty}</p>
                            </div>
                          </div>

                          <p className="font-semibold text-gray-900 mb-3">Select Date</p>
                          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                            {['Today', 'Dec 5', 'Dec 6', 'Dec 7', 'Dec 8'].map((date, i) => (
                              <button
                                key={date}
                                onClick={() => setSelectedDate(date)}
                                className={`px-4 py-3 rounded-xl text-center min-w-[70px] transition-colors ${selectedDate === date ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                              >
                                <p className="text-xs">{i === 0 ? 'Wed' : ['Thu', 'Fri', 'Sat', 'Sun'][i-1]}</p>
                                <p className="font-semibold text-sm">{date}</p>
                              </button>
                            ))}
                          </div>

                          <p className="font-semibold text-gray-900 mb-3">Available Times</p>
                          <div className="grid grid-cols-3 gap-2 mb-6">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                onClick={() => setShowBookingConfirm(true)}
                                className="bg-gray-100 hover:bg-blue-50 hover:border-blue-300 border border-transparent text-gray-700 py-3 rounded-xl text-sm font-medium transition-all"
                              >
                                {time}
                              </button>
                            ))}
                          </div>

                          <p className="font-semibold text-gray-900 mb-3">Appointment Type</p>
                          <div className="flex gap-3">
                            <button className="flex-1 bg-blue-50 border-2 border-blue-500 rounded-xl p-4 text-center">
                              <Icon name="Video" className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                              <p className="text-blue-700 font-medium text-sm">Video Call</p>
                            </button>
                            <button className="flex-1 bg-gray-50 border-2 border-transparent rounded-xl p-4 text-center">
                              <Icon name="MapPin" className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                              <p className="text-gray-600 font-medium text-sm">In Person</p>
                            </button>
                          </div>
                        </div>

                        {showBookingConfirm && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4 animate-fade-in">
                            <div className="bg-white rounded-2xl p-6 w-full max-w-xs">
                              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                <Icon name="CheckCircle" className="w-8 h-8 text-green-500" />
                              </div>
                              <h3 className="font-bold text-gray-900 text-lg text-center mb-2">Booking Confirmed!</h3>
                              <p className="text-gray-500 text-center text-sm mb-4">Your appointment with {selectedDoctor.name} has been scheduled.</p>
                              <button 
                                onClick={() => { setShowBookingConfirm(false); setActiveScreen('dashboard'); }}
                                className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold"
                              >
                                Done
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {activeScreen === 'appointments' && (
                      <div className="animate-fade-in">
                        <div className="px-4 py-4 border-b border-gray-100 flex items-center gap-3">
                          <button onClick={() => setActiveScreen('dashboard')} className="p-2 -ml-2">
                            <Icon name="ArrowLeft" className="w-5 h-5 text-gray-600" />
                          </button>
                          <h2 className="font-bold text-gray-900 text-lg">My Appointments</h2>
                        </div>
                        <div className="px-4 py-4">
                          <p className="text-gray-500 text-sm mb-3">Upcoming</p>
                          <div className="space-y-3">
                            {appointments.map((apt, i) => (
                              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-4">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">{apt.doctor.split(' ')[1][0]}{apt.doctor.split(' ')[2][0]}</div>
                                    <div>
                                      <p className="font-semibold text-gray-900 text-sm">{apt.doctor}</p>
                                      <p className="text-gray-500 text-xs">{apt.type}</p>
                                    </div>
                                  </div>
                                  <span className={`text-xs px-2 py-1 rounded-full ${apt.status === 'upcoming' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                                    {apt.status === 'upcoming' ? 'Today' : 'Scheduled'}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                                    <div className="flex items-center gap-1">
                                      <Icon name="Calendar" className="w-4 h-4" />
                                      <span>{apt.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Icon name="Clock" className="w-4 h-4" />
                                      <span>{apt.time}</span>
                                    </div>
                                  </div>
                                  {apt.status === 'upcoming' && (
                                    <button className="bg-blue-500 text-white text-xs px-3 py-1.5 rounded-lg font-medium">Join</button>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-around">
                    <button onClick={() => setActiveScreen('dashboard')} className={`flex flex-col items-center ${activeScreen === 'dashboard' ? 'text-blue-500' : 'text-gray-400'}`}>
                      <Icon name="Home" className="w-5 h-5" />
                      <span className="text-xs mt-1">Home</span>
                    </button>
                    <button onClick={() => setActiveScreen('find-doctor')} className={`flex flex-col items-center ${activeScreen === 'find-doctor' || activeScreen === 'book' ? 'text-blue-500' : 'text-gray-400'}`}>
                      <Icon name="Search" className="w-5 h-5" />
                      <span className="text-xs mt-1">Search</span>
                    </button>
                    <button onClick={() => setActiveScreen('appointments')} className={`flex flex-col items-center ${activeScreen === 'appointments' ? 'text-blue-500' : 'text-gray-400'}`}>
                      <Icon name="Calendar" className="w-5 h-5" />
                      <span className="text-xs mt-1">Bookings</span>
                    </button>
                    <button className="flex flex-col items-center text-gray-400">
                      <Icon name="User" className="w-5 h-5" />
                      <span className="text-xs mt-1">Profile</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
            </div>
          </div>

          {/* Instructions */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={() => setActiveScreen('dashboard')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeScreen === 'dashboard' ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setActiveScreen('find-doctor')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeScreen === 'find-doctor' ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}
            >
              Find Doctor
            </button>
            <button 
              onClick={() => setActiveScreen('appointments')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeScreen === 'appointments' ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}
            >
              Appointments
            </button>
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Unraveling the patient journey</h2>
          <p className="text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto">
            Through comprehensive research, we mapped the complete healthcare experience from initial need to follow-up care.
          </p>

          {/* Journey Map Visualization */}
          <div className="bg-[#111827] rounded-2xl p-8 overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Headers */}
              <div className="grid grid-cols-5 gap-4 mb-6">
                <div className="bg-purple-500/20 rounded-lg px-4 py-2 text-center">
                  <span className="text-purple-400 font-semibold text-sm">Awareness</span>
                </div>
                <div className="bg-blue-500/20 rounded-lg px-4 py-2 text-center">
                  <span className="text-blue-400 font-semibold text-sm">Research</span>
                </div>
                <div className="bg-green-500/20 rounded-lg px-4 py-2 text-center">
                  <span className="text-green-400 font-semibold text-sm">Booking</span>
                </div>
                <div className="bg-yellow-500/20 rounded-lg px-4 py-2 text-center">
                  <span className="text-yellow-400 font-semibold text-sm">Consultation</span>
                </div>
                <div className="bg-pink-500/20 rounded-lg px-4 py-2 text-center">
                  <span className="text-pink-400 font-semibold text-sm">Follow-up</span>
                </div>
              </div>

              {/* User Actions Row */}
              <div className="mb-4">
                <p className="text-gray-500 text-xs mb-2 uppercase tracking-wider">User Actions</p>
                <div className="grid grid-cols-5 gap-4">
                  {[
                    ['Feels symptoms', 'Searches online'],
                    ['Compares doctors', 'Reads reviews'],
                    ['Selects time', 'Confirms booking'],
                    ['Joins video call', 'Discusses symptoms'],
                    ['Gets prescription', 'Schedules follow-up']
                  ].map((actions, i) => (
                    <div key={i} className="space-y-2">
                      {actions.map((action, j) => (
                        <div key={j} className="bg-green-500/20 rounded px-3 py-2 text-green-300 text-xs">{action}</div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pain Points Row */}
              <div className="mb-4">
                <p className="text-gray-500 text-xs mb-2 uppercase tracking-wider">Pain Points</p>
                <div className="grid grid-cols-5 gap-4">
                  {[
                    ['Uncertainty about severity'],
                    ['Hard to find right specialist', 'Confusing availability'],
                    ['Long wait times', 'Complex forms'],
                    ['Technical issues', 'Privacy concerns'],
                    ['Forget instructions', 'Lost prescriptions']
                  ].map((pains, i) => (
                    <div key={i} className="space-y-2">
                      {pains.map((pain, j) => (
                        <div key={j} className="bg-red-500/20 rounded px-3 py-2 text-red-300 text-xs">{pain}</div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Opportunities Row */}
              <div>
                <p className="text-gray-500 text-xs mb-2 uppercase tracking-wider">Opportunities</p>
                <div className="grid grid-cols-5 gap-4">
                  {[
                    ['Symptom checker AI'],
                    ['Smart matching', 'Verified reviews'],
                    ['1-tap booking', 'Auto form-fill'],
                    ['HD video', 'End-to-end encryption'],
                    ['Digital prescriptions', 'Reminder system']
                  ].map((opps, i) => (
                    <div key={i} className="space-y-2">
                      {opps.map((opp, j) => (
                        <div key={j} className="bg-yellow-500/20 rounded px-3 py-2 text-yellow-300 text-xs">{opp}</div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Challenges and the blueprint to success</h2>
          
          <p className="text-gray-400 text-lg mb-8">The blueprint for MediBook was meticulously crafted:</p>

          <ul className="space-y-4 text-gray-400 text-lg mb-12">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">Discovery:</span>
              <span>Raw data collection and strategic research reports.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">Design:</span>
              <span>From site maps to wireframes, both low and high fidelity.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">Development:</span>
              <span>Building responsive apps in React Native for mobile users, and Next.js for web interfaces, complemented by robust testing phases.</span>
            </li>
          </ul>

          <p className="text-gray-400 text-lg">
            The journey wasn&apos;t without its hurdles. HIPAA compliance meant every feature had to be reviewed by healthcare legal experts. We implemented end-to-end encryption for video calls and secure cloud storage for medical records.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform healthcare?</h2>
          <p className="text-gray-400 text-lg mb-8">Let&apos;s discuss how we can help bring your healthcare vision to life.</p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
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
