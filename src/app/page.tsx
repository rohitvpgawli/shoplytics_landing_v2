'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Brain, Cpu, LineChart, MessageSquare, Zap } from 'lucide-react';
import { useState } from 'react';
import ParticleBackground from '../components/ParticleBackground';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    alert(`Thank you! ${email} has been added to the waitlist.`);
    setEmail('');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
        
        {/* Particle background */}
        <ParticleBackground />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ top: '20%', left: '20%' }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ bottom: '20%', right: '20%' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center py-16">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-16 md:mb-0 space-y-8 md:pr-8">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block mb-2">Stop Guessing,</span>
              <span className="gradient-text">Start Scaling</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-full mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Connect your Shopify store, ad platforms, and email tools to get AI-powered insights and recommendations to grow your revenue.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-[90%] lg:w-[95%]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="px-6 py-4 rounded-full bg-black/30 border border-purple-500/30 focus:border-purple-500 focus:outline-none flex-grow text-base"
                />
                <button type="submit" className="button-primary flex items-center justify-center py-4 px-6 whitespace-nowrap">
                  Join Waitlist <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>

          {/* Dashboard Image */}
          <div className="md:w-1/2 relative md:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-radial from-purple-500/40 via-purple-500/20 to-transparent rounded-xl blur-3xl transform scale-150 animate-pulse-slow"></div>
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/30 via-indigo-500/15 to-transparent rounded-xl blur-2xl transform scale-125"></div>
              <div className="absolute inset-0 bg-gradient-radial from-violet-500/20 via-fuchsia-500/10 to-transparent rounded-xl blur-xl transform scale-110"></div>
              
              {/* Dashboard image */}
              <motion.img 
                src="/images/dashboard-hero.svg" 
                alt="Shoplytics AI Dashboard" 
                className="relative z-10 w-full max-w-2xl mx-auto rounded-xl shadow-2xl border border-white/10"
                style={{ filter: 'drop-shadow(0 0 20px rgba(167, 139, 250, 0.3))' }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-5 -right-5 w-20 h-20 bg-purple-600/20 rounded-full blur-md"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-5 -left-5 w-16 h-16 bg-blue-600/20 rounded-full blur-md"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div 
          className="absolute bottom-10 left-0 right-0 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="glass-effect p-6 rounded-2xl">
            <div className="text-3xl font-bold gradient-text">3-in-1</div>
            <div className="text-gray-400">Unified Platform</div>
          </div>
          <div className="glass-effect p-6 rounded-2xl">
            <div className="text-3xl font-bold gradient-text">10x</div>
            <div className="text-gray-400">Faster Insights</div>
          </div>
          <div className="glass-effect p-6 rounded-2xl">
            <div className="text-3xl font-bold gradient-text">98%</div>
            <div className="text-gray-400">Accuracy Rate</div>
          </div>
          <div className="glass-effect p-6 rounded-2xl">
            <div className="text-3xl font-bold gradient-text">24/7</div>
            <div className="text-gray-400">AI Support</div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Powerful Features</span> for Your Store
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Shoplytics AI combines advanced analytics with actionable insights to help you make smarter decisions.
            </p>
          </div>

          {/* Feature 1 - Data Consolidation */}
          <div className="mb-32">
            <motion.div 
              className="flex flex-col lg:flex-row items-center gap-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Left side - Text content */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-600/20 p-4 rounded-xl shadow-md shadow-purple-500/10">
                    <Cpu className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-3xl font-bold gradient-text">Data Consolidation</h3>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Connect multiple platforms and get a 360° view of your entire business in one place.
                </p>
                <ul className="space-y-6 mt-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-purple-600/20 p-2 rounded-full mt-1">
                      <ArrowRight className="w-4 h-4 text-purple-400" />
                    </div>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">Multiple integrations</span> including Shopify, Meta, and other ad platforms, email marketing tools like Klaviyo, and more
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-purple-600/20 p-2 rounded-full mt-1">
                      <ArrowRight className="w-4 h-4 text-purple-400" />
                    </div>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">Connect once, understand forever</span> — our AI learns your business and continuously improves
                    </p>
                  </li>
                </ul>
              </div>
              
              {/* Right side - Graphic */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <motion.div 
                    className="absolute -top-10 -left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="glass-effect p-3 rounded-2xl border border-purple-500/20 relative z-10">
                    <div className="grid grid-cols-3 gap-2">
                      {/* Integration icons - Row 1 */}
                      <div className="glass-effect p-1.5 rounded-lg flex items-center justify-center aspect-square bg-[#1A1A1A] border border-gray-800">
                        <img src="/images/shopify-logo.svg" alt="Shopify" className="w-14 h-14 object-contain" />
                      </div>
                      <div className="glass-effect p-1.5 rounded-lg flex items-center justify-center aspect-square bg-[#1A1A1A] border border-gray-800">
                        <img src="/images/meta-logo.svg" alt="Meta" className="w-14 h-14 object-contain" />
                      </div>
                      <div className="glass-effect p-1.5 rounded-lg flex items-center justify-center aspect-square bg-[#1A1A1A] border border-gray-800">
                        <img src="/images/google-ads-logo.svg" alt="Google Ads" className="w-14 h-14 object-contain" />
                      </div>
                      {/* Integration icons - Row 2 */}
                      <div className="glass-effect p-1.5 rounded-lg flex items-center justify-center aspect-square bg-[#1A1A1A] border border-gray-800">
                        <img src="/images/tiktok.svg" alt="TikTok" className="w-14 h-14 object-contain" />
                      </div>
                      <div className="glass-effect p-1.5 rounded-lg flex items-center justify-center aspect-square bg-[#1A1A1A] border border-gray-800">
                        <img src="/images/amazon-logo.svg" alt="Amazon" className="w-14 h-14 object-contain" />
                      </div>
                      <div className="glass-effect p-1.5 rounded-lg flex items-center justify-center aspect-square bg-[#1A1A1A] border border-gray-800">
                        <div className="text-base font-bold text-purple-400">+ More</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 2 - AI Powered Chat */}
          <div className="mb-32">
            <motion.div 
              className="flex flex-col-reverse lg:flex-row items-center gap-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Left side - Graphic */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <motion.div 
                    className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="glass-effect p-8 rounded-2xl border border-blue-500/20 relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-blue-600/20 p-3 rounded-full">
                        <MessageSquare className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="glass-effect p-4 rounded-xl flex-1">
                        <p className="text-gray-300 italic">"How did our summer sale perform compared to last year?"</p>
                      </div>
                    </div>
                    <div className="glass-effect p-6 rounded-xl border border-blue-500/20 mb-6">
                      <p className="text-white mb-4">Your summer sale generated <span className="font-bold text-blue-400">32% more revenue</span> than last year with a <span className="font-bold text-blue-400">12% higher conversion rate</span>.</p>
                      <div className="flex gap-4">
                        <div className="glass-effect p-3 rounded-lg flex-1">
                          <div className="text-sm text-gray-400">2022</div>
                          <div className="text-xl font-bold text-white">$42,500</div>
                        </div>
                        <div className="glass-effect p-3 rounded-lg flex-1">
                          <div className="text-sm text-gray-400">2023</div>
                          <div className="text-xl font-bold gradient-text">$56,100</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="glass-effect px-4 py-2 rounded-lg border border-blue-500/20 text-sm text-blue-400">
                        View detailed analysis →
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Text content */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600/20 p-4 rounded-xl shadow-md shadow-blue-500/10">
                    <Brain className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-bold gradient-text">AI Powered Chat</h3>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Ask questions in plain English and get immediate insights about your store's performance.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-600/20 p-2 rounded-full mt-1">
                      <ArrowRight className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">5-6 Figures in Average Savings Across Sales Channels</p>
                      <p className="text-gray-300 mt-1">Evaluates pricing patterns, seasonality effects & product-specific costs to recommend optimal pricing strategies</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-600/20 p-2 rounded-full mt-1">
                      <ArrowRight className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">3x Revenue & 2x Conversion Rates on Marketing Campaigns</p>
                      <p className="text-gray-300 mt-1">Creates high-value customer segments for targeted promotions and personalized product recommendations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-600/20 p-2 rounded-full mt-1">
                      <ArrowRight className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">20+ Hours Saved on Weekly Ad Reporting</p>
                      <p className="text-gray-300 mt-1">Automates analysis of ad performance metrics and creates regular reports to optimize spend across channels</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Feature 3 - Consultant Level Deep Analysis */}
          <div className="mb-32">
            <motion.div 
              className="flex flex-col lg:flex-row items-center gap-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Left side - Text content */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-600/20 p-4 rounded-xl shadow-md shadow-green-500/10">
                    <BarChart3 className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold gradient-text">Consultant Level Analysis</h3>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Leverage advanced data science to uncover insights that would normally require a team of consultants.
                </p>
                <div className="space-y-6 mt-6">
                  <div className="glass-effect p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                    <h4 className="text-xl font-bold text-white mb-2">Pricing & Promotion Optimization</h4>
                    <p className="text-gray-300">
                      Factors in competitor pricing, ad performance, inventory levels, and demand trends to recommend strategic price changes and promotions that maximize revenue and profitability.
                    </p>
                  </div>
                  <div className="glass-effect p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                    <h4 className="text-xl font-bold text-white mb-2">Ad Spend Management</h4>
                    <p className="text-gray-300">
                      Continuously analyzes ad performance, customer behavior, and sales data to determine the most effective budget allocation—ensuring your marketing dollars are spent where they generate the highest return.
                    </p>
                  </div>
                  <div className="glass-effect p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                    <h4 className="text-xl font-bold text-white mb-2">Customer Engagement</h4>
                    <p className="text-gray-300">
                      Clusters customers based on purchase behavior, interactions, and lifetime value, helping you personalize marketing, optimize retention, and improve targeting strategies with data-backed precision.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right side - Graphic */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <motion.div 
                    className="absolute -top-10 -left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="glass-effect p-8 rounded-2xl border border-green-500/20 relative z-10">
                    <div className="flex justify-between mb-6">
                      <div className="text-xl font-bold text-white">Performance Analysis</div>
                      <div className="text-sm text-green-400">Last 30 days</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="glass-effect p-4 rounded-xl">
                        <div className="text-sm text-gray-400 mb-1">Revenue Growth</div>
                        <div className="text-2xl font-bold text-white flex items-center gap-2">
                          +24% <span className="text-green-400 text-sm">↑</span>
                        </div>
                      </div>
                      <div className="glass-effect p-4 rounded-xl">
                        <div className="text-sm text-gray-400 mb-1">Ad ROAS</div>
                        <div className="text-2xl font-bold text-white flex items-center gap-2">
                          3.8x <span className="text-green-400 text-sm">↑</span>
                        </div>
                      </div>
                      <div className="glass-effect p-4 rounded-xl">
                        <div className="text-sm text-gray-400 mb-1">AOV</div>
                        <div className="text-2xl font-bold text-white flex items-center gap-2">
                          $87 <span className="text-green-400 text-sm">↑</span>
                        </div>
                      </div>
                      <div className="glass-effect p-4 rounded-xl">
                        <div className="text-sm text-gray-400 mb-1">Retention Rate</div>
                        <div className="text-2xl font-bold text-white flex items-center gap-2">
                          42% <span className="text-green-400 text-sm">↑</span>
                        </div>
                      </div>
                    </div>
                    <div className="glass-effect p-4 rounded-xl border border-green-500/20">
                      <div className="text-white font-semibold mb-3">Recommended Actions</div>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          Increase budget for Facebook campaign "Summer Collection"
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          Bundle "Product A" with "Product C" for 15% higher AOV
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          Send re-engagement email to lapsed customer segment
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 4 - AI Recommendation Engine */}
          <div>
            <motion.div 
              className="flex flex-col-reverse lg:flex-row items-center gap-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Left side - Graphic */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <motion.div 
                    className="absolute -top-10 -right-10 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="glass-effect p-8 rounded-2xl border border-pink-500/20 relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="bg-pink-600/20 p-3 rounded-full">
                          <Zap className="w-5 h-5 text-pink-400" />
                        </div>
                        <div className="text-xl font-bold text-white">Opportunity Alert</div>
                      </div>
                      <div className="text-sm text-pink-400">High Priority</div>
                    </div>
                    <div className="glass-effect p-5 rounded-xl border border-pink-500/20 mb-6">
                      <h4 className="text-lg font-bold text-white mb-2">Inventory Forecast Alert</h4>
                      <p className="text-gray-300 mb-4">
                        Based on current sales velocity, "Summer Essentials Bundle" will stock out in 12 days, before your promotion ends.
                      </p>
                      <div className="flex gap-4">
                        <div className="glass-effect px-4 py-2 rounded-lg text-sm text-white">
                          Order 200 more units
                        </div>
                        <div className="glass-effect px-4 py-2 rounded-lg text-sm text-white">
                          Adjust promotion
                        </div>
                      </div>
                    </div>
                    <div className="glass-effect p-5 rounded-xl border border-pink-500/20">
                      <h4 className="text-lg font-bold text-white mb-2">Revenue Opportunity</h4>
                      <p className="text-gray-300 mb-4">
                        Customers who purchase "Product X" are 4x more likely to also buy "Product Y" within 30 days. Consider creating a bundle.
                      </p>
                      <div className="flex gap-4">
                        <div className="glass-effect px-4 py-2 rounded-lg text-sm text-white">
                          Create bundle
                        </div>
                        <div className="glass-effect px-4 py-2 rounded-lg text-sm text-white">
                          View analysis
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Text content */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-pink-600/20 p-4 rounded-xl shadow-md shadow-pink-500/10">
                    <Zap className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-3xl font-bold gradient-text">AI Recommendation Engine</h3>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Project sales and inventory needs with AI-powered forecasting to stay ahead of demand.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-pink-600/20 p-2 rounded-full mt-1">
                      <ArrowRight className="w-4 h-4 text-pink-400" />
                    </div>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">Proactive notifications</span> about significant changes and opportunities before they become obvious
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-pink-600/20 p-2 rounded-full mt-1">
                      <ArrowRight className="w-4 h-4 text-pink-400" />
                    </div>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">Product bundling suggestions</span> to increase average order value and improve customer satisfaction
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-pink-600/20 p-2 rounded-full mt-1">
                      <ArrowRight className="w-4 h-4 text-pink-400" />
                    </div>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">Marketing campaign optimization</span> with suggestions for timing, frequency, and targeting to maximize ROI
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-pink-600/20 p-2 rounded-full mt-1">
                      <ArrowRight className="w-4 h-4 text-pink-400" />
                    </div>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">Profitable discount ranges</span> that balance conversion rate improvements with margin preservation
                    </p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Key Benefits</span> for Your Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Shoplytics AI doesn&apos;t just show you data—it helps you understand what it means and what to do next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left column - Image/Illustration */}
            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-3xl transform rotate-3"></div>
                <div className="absolute inset-0 glass-effect rounded-3xl transform -rotate-3 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-4xl font-bold gradient-text mb-4">20%+</div>
                    <div className="text-xl text-white">Average Revenue Growth</div>
                    <div className="mt-8 glass-effect p-4 rounded-xl">
                      <div className="text-sm text-gray-300">Based on early access users</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right column - Benefits list */}
            <div className="space-y-8">
              {/* Benefit 1 */}
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-purple-600/20 p-3 rounded-xl h-fit">
                  <ArrowRight className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Real-time insights on what&apos;s working</h3>
                  <p className="text-gray-300">
                    Instantly see which products, campaigns, and strategies are driving revenue, and which need attention.
                  </p>
                </div>
              </motion.div>

              {/* Benefit 2 */}
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-purple-600/20 p-3 rounded-xl h-fit">
                  <ArrowRight className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Product bundling recommendations</h3>
                  <p className="text-gray-300">
                    Get AI-powered suggestions for product bundles that increase average order value based on purchase patterns.
                  </p>
                </div>
              </motion.div>

              {/* Benefit 3 */}
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-purple-600/20 p-3 rounded-xl h-fit">
                  <ArrowRight className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Pricing and promotion suggestions</h3>
                  <p className="text-gray-300">
                    Optimize your pricing strategy and promotional offers based on customer behavior and market trends.
                  </p>
                </div>
              </motion.div>

              {/* Benefit 4 */}
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-purple-600/20 p-3 rounded-xl h-fit">
                  <ArrowRight className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AI-driven alerts for opportunities</h3>
                  <p className="text-gray-300">
                    Never miss a trend, anomaly, or opportunity with proactive notifications that keep you ahead of the curve.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
        
        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="glass-effect p-8 md:p-12 rounded-3xl border border-purple-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the <span className="gradient-text">Waitlist</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be the first to experience Shoplytics AI and get exclusive early access pricing.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="button-primary whitespace-nowrap">
                  Join Waitlist
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text mb-4">Shoplytics AI</div>
            <p className="text-gray-400 mb-6">
              AI-powered analytics and recommendations for Shopify stores
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <a href="mailto:info@shoplytics.co" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </div>
            <div className="mt-8 text-gray-500">
              © {new Date().getFullYear()} Shoplytics AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
