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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block">Stop Guessing,</span>
              <span className="gradient-text">Start Scaling</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Connect your Shopify store, ad platforms, and email tools to get AI-powered insights and recommendations to grow your revenue.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#waitlist" className="button-primary">
                Join Waitlist
              </a>
              <a href="#demo" className="button-secondary">
                Watch Demo
              </a>
            </motion.div>
          </div>

          {/* Dashboard Image */}
          <div className="md:w-1/2 relative">
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
            <div className="text-3xl font-bold gradient-text">1000+</div>
            <div className="text-gray-400">Active Stores</div>
          </div>
          <div className="glass-effect p-6 rounded-2xl">
            <div className="text-3xl font-bold gradient-text">$50M+</div>
            <div className="text-gray-400">Revenue Analyzed</div>
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Powerful Features</span> for Your Store
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Shoplytics AI combines advanced analytics with actionable insights to help you make smarter decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              className="glass-effect p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-600/20 p-3 rounded-xl w-fit mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Insights</h3>
              <p className="text-gray-300">
                Get clear, actionable recommendations based on your store&apos;s data, not just raw numbers.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="glass-effect p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-600/20 p-3 rounded-xl w-fit mb-4">
                <MessageSquare className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Talk to Your Data</h3>
              <p className="text-gray-300">
                Ask questions in plain English and get immediate insights about your store&apos;s performance.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="glass-effect p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-600/20 p-3 rounded-xl w-fit mb-4">
                <BarChart3 className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Dashboards</h3>
              <p className="text-gray-300">
                Build dashboards that highlight the metrics most important to your business.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              className="glass-effect p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-600/20 p-3 rounded-xl w-fit mb-4">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proactive Alerts</h3>
              <p className="text-gray-300">
                Get notified about significant changes and opportunities before they become obvious.
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div 
              className="glass-effect p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-600/20 p-3 rounded-xl w-fit mb-4">
                <LineChart className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Forecasting Tools</h3>
              <p className="text-gray-300">
                Project sales and inventory needs with AI-powered forecasting to stay ahead of demand.
              </p>
            </motion.div>

            {/* Feature 6 */}
            <motion.div 
              className="glass-effect p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-600/20 p-3 rounded-xl w-fit mb-4">
                <Cpu className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Integration</h3>
              <p className="text-gray-300">
                Connect with Shopify, Meta, Google, TikTok, and Klaviyo in just a few clicks.
              </p>
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
