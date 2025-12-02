// Filename: app/work/coinflow/page.jsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Icon from '../../components/Icon';

export default function CoinflowCaseStudy() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [tradeType, setTradeType] = useState('buy');
  const [amount, setAmount] = useState('100');

  const cryptoData = {
    BTC: { name: 'Bitcoin', price: 86644.03, change: -0.99, color: '#f7931a' },
    ETH: { name: 'Ethereum', price: 2801.42, change: -1.89, color: '#627eea' },
    XRP: { name: 'XRP', price: 2.02, change: -2.71, color: '#23292f' },
    SOL: { name: 'Solana', price: 127.17, change: -0.93, color: '#9945ff' },
    DOGE: { name: 'Dogecoin', price: 0.1359, change: -2.68, color: '#c3a634' },
  };

  const stats = [
    { value: '3637%', label: 'Increase in Sessions/User' },
    { value: '423%', label: 'Conversion Rate Increase' },
    { value: '1305%', label: 'Deposits Over $100' },
    { value: '101%', label: 'Avg Deposits/User' },
    { value: '81%', label: 'Users 30+ Min Sessions' },
    { value: '71%', label: 'Users 60+ Events/Session' },
  ];

  return (
    <div className="bg-[#0B0F19] min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/work" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
            Back to Work
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="text-emerald-400 font-semibold text-xl">Coinflow</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Professional cryptocurrency trading dashboard
              </h1>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We built Coinflow from the ground up—a sophisticated crypto trading platform featuring real-time price charts, instant buy/sell functionality, live order books, and comprehensive market statistics.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Platforms</p>
                  <p className="text-white font-medium">Web, iOS, Android</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Deliverables</p>
                  <p className="text-white font-medium">Strategy, UI/UX, Development</p>
                </div>
              </div>

              <a href="#" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                Visit Coinflow <Icon name="ArrowUpRight" className="w-5 h-5 ml-2" />
              </a>
            </div>

            {/* Hero Image - Interactive Preview */}
            <div className="relative">
              <div className="bg-[#0a0e14] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: cryptoData[selectedCrypto].color }}>
                        {selectedCrypto[0]}
                      </div>
                      <div>
                        <div className="text-white font-semibold">{cryptoData[selectedCrypto].name}</div>
                        <div className="text-gray-500 text-xs">{selectedCrypto}/USD</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">${cryptoData[selectedCrypto].price.toLocaleString()}</div>
                      <div className={`text-sm ${cryptoData[selectedCrypto].change < 0 ? 'text-red-400' : 'text-green-400'}`}>
                        {cryptoData[selectedCrypto].change}% (24h)
                      </div>
                    </div>
                  </div>
                  
                  {/* Mini Chart */}
                  <div className="h-32 bg-[#161b22] rounded-lg mb-4 flex items-end p-2">
                    <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="heroGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path d="M0,70 C50,60 100,80 150,50 C200,20 250,40 300,30 C350,20 400,25 400,20" fill="none" stroke="#10b981" strokeWidth="2"/>
                      <path d="M0,70 C50,60 100,80 150,50 C200,20 250,40 300,30 C350,20 400,25 400,20 L400,100 L0,100 Z" fill="url(#heroGrad)"/>
                    </svg>
                  </div>

                  {/* Quick Trade */}
                  <div className="flex gap-2 mb-3">
                    <button 
                      onClick={() => setTradeType('buy')}
                      className={`flex-1 py-2 rounded-lg font-semibold text-sm transition-colors ${tradeType === 'buy' ? 'bg-emerald-500 text-white' : 'bg-gray-800 text-gray-400'}`}
                    >
                      Buy
                    </button>
                    <button 
                      onClick={() => setTradeType('sell')}
                      className={`flex-1 py-2 rounded-lg font-semibold text-sm transition-colors ${tradeType === 'sell' ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-400'}`}
                    >
                      Sell
                    </button>
                  </div>
                  <div className="flex items-center bg-[#161b22] border border-gray-700 rounded-lg px-3 py-2 mb-3">
                    <span className="text-gray-500 text-sm">$</span>
                    <input 
                      type="text" 
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="bg-transparent flex-1 text-white text-right outline-none ml-2"
                    />
                    <span className="text-gray-500 text-sm ml-2">USD</span>
                  </div>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${tradeType === 'buy' ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-red-500 hover:bg-red-600'} text-white`}>
                    {tradeType === 'buy' ? 'Buy' : 'Sell'} {selectedCrypto}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#111827] border-y border-white/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm mb-8">Results 2 months after launch</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Icon name="TrendingUp" className="w-5 h-5 text-emerald-400" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Challenge</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Coinflow came to us with a clear vision: create a trading platform that could compete with established players like Coinbase and Robinhood, but with a focus on serious traders who needed more advanced tools without the complexity.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            The key challenges were:
          </p>
          <ul className="space-y-4 text-gray-400 text-lg">
            <li className="flex items-start gap-3">
              <Icon name="CheckCircle" className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
              <span>Real-time data synchronization across all devices with sub-100ms latency</span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="CheckCircle" className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
              <span>Intuitive interface that doesn't overwhelm new users while providing depth for pros</span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="CheckCircle" className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
              <span>Bank-grade security with 2FA, biometric login, and cold storage integration</span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="CheckCircle" className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
              <span>Regulatory compliance across multiple jurisdictions</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Interactive Dashboard Demo */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interactive Dashboard Demo</h2>
            <p className="text-gray-400 text-lg">Explore the live trading interface we built</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-2 mb-8">
            {['dashboard', 'markets', 'wallet', 'history'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-medium capitalize transition-colors ${activeTab === tab ? 'bg-emerald-500 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Dashboard View */}
          <div className="bg-[#0a0e14] rounded-2xl border border-gray-800 overflow-hidden">
            {activeTab === 'dashboard' && (
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Portfolio Summary */}
                  <div className="lg:col-span-2">
                    <div className="bg-[#161b22] rounded-xl p-6 mb-6">
                      <h3 className="text-white font-semibold mb-4">Portfolio Value</h3>
                      <div className="text-4xl font-bold text-white mb-2">$124,847.32</div>
                      <div className="flex items-center gap-2">
                        <Icon name="TrendingUp" className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">+12.4% ($13,847.32)</span>
                        <span className="text-gray-500">Today</span>
                      </div>
                    </div>

                    {/* Asset List */}
                    <div className="bg-[#161b22] rounded-xl overflow-hidden">
                      <div className="grid grid-cols-5 text-xs text-gray-500 px-4 py-3 border-b border-gray-800">
                        <span>Asset</span>
                        <span className="text-right">Price</span>
                        <span className="text-right">24h</span>
                        <span className="text-right">Holdings</span>
                        <span className="text-right">Value</span>
                      </div>
                      {Object.entries(cryptoData).map(([symbol, data]) => (
                        <div 
                          key={symbol}
                          onClick={() => setSelectedCrypto(symbol)}
                          className={`grid grid-cols-5 px-4 py-4 border-b border-gray-800/50 cursor-pointer transition-colors ${selectedCrypto === symbol ? 'bg-emerald-500/10' : 'hover:bg-white/5'}`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: data.color }}>
                              {symbol[0]}
                            </div>
                            <div>
                              <div className="text-white font-medium text-sm">{data.name}</div>
                              <div className="text-gray-500 text-xs">{symbol}</div>
                            </div>
                          </div>
                          <div className="text-right text-white text-sm">${data.price.toLocaleString()}</div>
                          <div className={`text-right text-sm ${data.change < 0 ? 'text-red-400' : 'text-emerald-400'}`}>{data.change}%</div>
                          <div className="text-right text-white text-sm">{(Math.random() * 5).toFixed(4)}</div>
                          <div className="text-right text-white text-sm">${(data.price * Math.random() * 5).toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Trade Panel */}
                  <div className="bg-[#161b22] rounded-xl p-6">
                    <h3 className="text-white font-semibold mb-4">Quick Trade</h3>
                    
                    <div className="flex gap-2 mb-4">
                      <button 
                        onClick={() => setTradeType('buy')}
                        className={`flex-1 py-2.5 rounded-lg font-semibold transition-colors ${tradeType === 'buy' ? 'bg-emerald-500 text-white' : 'bg-gray-800 text-gray-400'}`}
                      >
                        Buy
                      </button>
                      <button 
                        onClick={() => setTradeType('sell')}
                        className={`flex-1 py-2.5 rounded-lg font-semibold transition-colors ${tradeType === 'sell' ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-400'}`}
                      >
                        Sell
                      </button>
                    </div>

                    <div className="mb-4">
                      <label className="text-gray-500 text-sm mb-2 block">Asset</label>
                      <select 
                        value={selectedCrypto}
                        onChange={(e) => setSelectedCrypto(e.target.value)}
                        className="w-full bg-[#0a0e14] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-emerald-500"
                      >
                        {Object.entries(cryptoData).map(([symbol, data]) => (
                          <option key={symbol} value={symbol}>{data.name} ({symbol})</option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="text-gray-500 text-sm mb-2 block">Amount (USD)</label>
                      <input 
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full bg-[#0a0e14] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-emerald-500 text-right"
                      />
                    </div>

                    <div className="bg-[#0a0e14] rounded-lg p-4 mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">You&apos;ll receive</span>
                        <span className="text-white font-medium">
                          {(parseFloat(amount || 0) / cryptoData[selectedCrypto].price).toFixed(6)} {selectedCrypto}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Fee (0.1%)</span>
                        <span className="text-white">${(parseFloat(amount || 0) * 0.001).toFixed(2)}</span>
                      </div>
                    </div>

                    <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${tradeType === 'buy' ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-red-500 hover:bg-red-600'} text-white`}>
                      {tradeType === 'buy' ? 'Buy' : 'Sell'} {selectedCrypto}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'markets' && (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(cryptoData).map(([symbol, data]) => (
                    <div key={symbol} className="bg-[#161b22] rounded-xl p-4 hover:bg-[#1c2128] transition-colors cursor-pointer">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: data.color }}>
                            {symbol[0]}
                          </div>
                          <div>
                            <div className="text-white font-semibold">{data.name}</div>
                            <div className="text-gray-500 text-sm">{symbol}/USD</div>
                          </div>
                        </div>
                        <div className={`px-2 py-1 rounded text-xs font-medium ${data.change < 0 ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                          {data.change}%
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-white mb-2">${data.price.toLocaleString()}</div>
                      <div className="h-16 bg-[#0a0e14] rounded-lg overflow-hidden">
                        <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                          <path d={`M0,${30 + Math.random() * 20} Q50,${20 + Math.random() * 20} 100,${30 + Math.random() * 20} T200,${25 + Math.random() * 20}`} fill="none" stroke={data.change < 0 ? '#ef4444' : '#10b981'} strokeWidth="2"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wallet' && (
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-[#161b22] rounded-xl p-6">
                    <h3 className="text-white font-semibold mb-6">Your Assets</h3>
                    {Object.entries(cryptoData).map(([symbol, data]) => {
                      const holdings = Math.random() * 5;
                      const value = holdings * data.price;
                      return (
                        <div key={symbol} className="flex items-center justify-between py-4 border-b border-gray-800 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: data.color }}>
                              {symbol[0]}
                            </div>
                            <div>
                              <div className="text-white font-medium">{data.name}</div>
                              <div className="text-gray-500 text-sm">{holdings.toFixed(4)} {symbol}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-medium">${value.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
                            <div className={`text-sm ${data.change < 0 ? 'text-red-400' : 'text-emerald-400'}`}>{data.change}%</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="bg-[#161b22] rounded-xl p-6">
                    <h3 className="text-white font-semibold mb-6">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-semibold transition-colors">
                        Deposit
                      </button>
                      <button className="bg-white/10 hover:bg-white/20 text-white py-4 rounded-xl font-semibold transition-colors">
                        Withdraw
                      </button>
                      <button className="bg-white/10 hover:bg-white/20 text-white py-4 rounded-xl font-semibold transition-colors">
                        Transfer
                      </button>
                      <button className="bg-white/10 hover:bg-white/20 text-white py-4 rounded-xl font-semibold transition-colors">
                        Convert
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="p-6">
                <div className="bg-[#161b22] rounded-xl overflow-hidden">
                  <div className="grid grid-cols-5 text-xs text-gray-500 px-4 py-3 border-b border-gray-800">
                    <span>Type</span>
                    <span>Asset</span>
                    <span className="text-right">Amount</span>
                    <span className="text-right">Price</span>
                    <span className="text-right">Date</span>
                  </div>
                  {[
                    { type: 'Buy', asset: 'BTC', amount: '0.0234', price: '$86,234', date: '2 min ago' },
                    { type: 'Sell', asset: 'ETH', amount: '1.5000', price: '$2,801', date: '15 min ago' },
                    { type: 'Buy', asset: 'SOL', amount: '10.000', price: '$127.17', date: '1 hour ago' },
                    { type: 'Buy', asset: 'BTC', amount: '0.1000', price: '$85,900', date: '3 hours ago' },
                    { type: 'Sell', asset: 'DOGE', amount: '5000.0', price: '$0.136', date: 'Yesterday' },
                  ].map((tx, i) => (
                    <div key={i} className="grid grid-cols-5 px-4 py-4 border-b border-gray-800/50 hover:bg-white/5">
                      <span className={`font-medium ${tx.type === 'Buy' ? 'text-emerald-400' : 'text-red-400'}`}>{tx.type}</span>
                      <span className="text-white">{tx.asset}</span>
                      <span className="text-right text-white">{tx.amount}</span>
                      <span className="text-right text-white">{tx.price}</span>
                      <span className="text-right text-gray-500">{tx.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Our Process</h2>
          
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-400 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Discovery &amp; Research</h3>
                <p className="text-gray-400 leading-relaxed">
                  We conducted extensive market research, analyzing competitors like Coinbase, Binance, and Robinhood. We interviewed 50+ active traders to understand their pain points and desires.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-400 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Design System</h3>
                <p className="text-gray-400 leading-relaxed">
                  We created a comprehensive design system with dark mode as the default, optimizing for long trading sessions. Every component was designed for clarity and quick decision-making.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-400 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
                <p className="text-gray-400 leading-relaxed">
                  Built with React Native for mobile and Next.js for web, with a real-time WebSocket backend. We implemented advanced charting with TradingView integration and bank-grade security.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-400 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Launch &amp; Scale</h3>
                <p className="text-gray-400 leading-relaxed">
                  Soft launch to 1,000 beta users, gathering feedback and iterating. Full launch with marketing push resulted in 50,000 users in the first month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to build something amazing?</h2>
          <p className="text-gray-400 text-lg mb-8">Let&apos;s discuss how we can help bring your vision to life.</p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
          >
            Start a Project
            <Icon name="ArrowRight" className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
