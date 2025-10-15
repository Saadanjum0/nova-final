import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Mic, Database, ArrowRight } from 'lucide-react';
import NovaButton from '../components/ui/NovaButton';
import NovaCard from '../components/ui/NovaCard';
import Badge from '../components/ui/NovaBadge';
import FadeIn from '../components/animations/FadeIn';
import MorphingText from '../components/animations/MorphingText';
import { Link } from 'react-router-dom';

const Home = () => {
  const morphWords = ['Intelligence.', 'Precision.', 'Clarity.', 'Nova.'];

  const services = [
    {
      icon: <Mic size={32} className="text-nova-accent" />,
      title: 'Voice Agents',
      description: 'Real-time AI that converses naturally. Built for customer support, sales, and internal operations.'
    },
    {
      icon: <Database size={32} className="text-nova-accent" />,
      title: 'Knowledge Systems',
      description: 'RAG-powered engines that understand your data. Instant answers. Complete context.'
    },
    {
      icon: <Sparkles size={32} className="text-nova-accent" />,
      title: 'Digital Experiences',
      description: 'Interfaces that feel alive. Web, mobile, and beyond.'
    }
  ];

  const projects = [
    {
      name: 'Vocalia',
      description: 'Voice AI infrastructure for modern applications',
      tag: 'Voice AI',
      gradient: 'from-indigo-500 to-purple-600',
      size: 'large'
    },
    {
      name: 'RAGify',
      description: 'Knowledge base engine with context-aware retrieval',
      tag: 'Knowledge',
      gradient: 'from-violet-500 to-fuchsia-600',
      size: 'small'
    },
    {
      name: 'Rasta',
      description: 'Transit intelligence system for urban mobility',
      tag: 'Experience',
      gradient: 'from-blue-500 to-cyan-600',
      size: 'small'
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="gradient-mesh">
          <div className="gradient-orb gradient-orb-1"></div>
          <div className="gradient-orb gradient-orb-2"></div>
          <div className="gradient-orb gradient-orb-3"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 py-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-space font-light tracking-tight">
              <MorphingText words={morphWords} />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {' '}Engineered.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-lg md:text-xl text-nova-text-secondary max-w-2xl mx-auto leading-relaxed"
            >
              AI systems that speak with clarity,
              <br />
              reason with precision,
              <br />
              and evolve with purpose.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Link to="/work">
                <NovaButton variant="primary">
                  View Our Work <ArrowRight size={20} />
                </NovaButton>
              </Link>
              <Link to="/contact">
                <NovaButton variant="ghost">
                  Start a Project <ArrowRight size={20} />
                </NovaButton>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown size={32} className="text-nova-accent opacity-60" />
          </motion.div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-screen-2xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-space font-normal tracking-tight text-center mb-20">
              What We Build
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <NovaCard>
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-space font-semibold mb-4 text-nova-text-primary">
                    {service.title}
                  </h3>
                  <p className="text-base text-nova-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </NovaCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-screen-2xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-space font-normal tracking-tight text-center mb-20">
              Featured Work
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <motion.div
                  className={`project-card relative overflow-hidden ${
                    project.size === 'large' ? 'md:col-span-2 h-96' : 'h-64'
                  } cursor-pointer group`}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Content */}
                  <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                    <Badge variant="accent">{project.tag}</Badge>
                    <div>
                      <h3 className="text-3xl font-space font-bold mb-2 text-white">{project.name}</h3>
                      <p className="text-lg text-nova-text-secondary mb-4">{project.description}</p>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-indigo-300 font-medium flex items-center gap-2">
                          View Case Study <ArrowRight size={18} />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Brief Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-space font-light leading-tight text-nova-text-primary">
                “We don't build AI products.
                <br />
                We build products that happen to be intelligent.”
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <p className="text-lg text-nova-text-secondary leading-relaxed">
                  Nova AI is a design-driven engineering studio crafting the next generation of
                  conversational systems. Based in Lahore. Working globally.
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 text-nova-accent hover:text-nova-accent-bright transition-colors font-medium">
                  More About Us <ArrowRight size={20} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-nova-bg-mid">
        <FadeIn>
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-space font-normal tracking-tight">
              Ready to build something exceptional?
            </h2>
            <Link to="/contact">
              <NovaButton variant="primary" className="text-xl px-12 py-5">
                Let's Talk <ArrowRight size={24} />
              </NovaButton>
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default Home;