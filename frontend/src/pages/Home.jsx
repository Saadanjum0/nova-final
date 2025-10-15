import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Mic, Database, ArrowRight } from 'lucide-react';
import Hero from '../components/ui/animated-shader-hero';
import NovaButton from '../components/ui/NovaButton';
import NovaCard from '../components/ui/NovaCard';
import Badge from '../components/ui/NovaBadge';
import FadeIn from '../components/animations/FadeIn';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <Mic size={32} className="text-orange-400" />,
      title: 'Voice Agents',
      description: 'Real-time AI that converses naturally. Built for customer support, sales, and internal operations.'
    },
    {
      icon: <Database size={32} className="text-orange-400" />,
      title: 'Knowledge Systems',
      description: 'RAG-powered engines that understand your data. Instant answers. Complete context.'
    },
    {
      icon: <Sparkles size={32} className="text-orange-400" />,
      title: 'Digital Experiences',
      description: 'Interfaces that feel alive. Web, mobile, and beyond.'
    }
  ];

  const projects = [
    {
      name: 'Vocalia',
      description: 'Voice AI infrastructure for modern applications',
      tag: 'Voice AI',
      gradient: 'from-orange-500 to-yellow-600',
      size: 'large'
    },
    {
      name: 'RAGify',
      description: 'Knowledge base engine with context-aware retrieval',
      tag: 'Knowledge',
      gradient: 'from-yellow-500 to-orange-600',
      size: 'small'
    },
    {
      name: 'Rasta',
      description: 'Transit intelligence system for urban mobility',
      tag: 'Experience',
      gradient: 'from-amber-500 to-orange-600',
      size: 'small'
    }
  ];

  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section with Shader Background and Text Loop */}
      <Hero
        headline={{
          line1: "Intelligence.",
          line2: "Engineered."
        }}
        subtitle="AI systems that speak with clarity, reason with precision, and evolve with purpose. Nova AI is a design-driven engineering studio based in Lahore, working globally."
        buttons={{
          primary: {
            text: "Start a Project",
            onClick: handleGetStarted
          },
          secondary: {
            text: "View Our Work",
            onClick: handleExploreWork
          }
        }}
      />

      {/* What We Build Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-screen-2xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-space font-normal tracking-tight text-center mb-20 bg-gradient-to-r from-orange-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
              What We Build
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <NovaCard>
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-space font-semibold mb-4 text-orange-100">
                    {service.title}
                  </h3>
                  <p className="text-base text-orange-200/70 leading-relaxed">
                    {service.description}
                  </p>
                </NovaCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section with Blur Overlay */}
      <section id="work" className="relative py-32 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-screen-2xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-space font-normal tracking-tight text-center mb-20 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Featured Work
            </h2>
          </FadeIn>

          {/* Blurred Content */}
          <div className="relative">
            <div className="filter blur-md pointer-events-none select-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                  <div
                    key={index}
                  className={`project-card relative overflow-hidden ${
                    project.size === 'large' ? 'md:col-span-2 h-96' : 'h-64'
                    }`}
                >
                  <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                    <Badge variant="accent">{project.tag}</Badge>
                    <div>
                      <h3 className="text-3xl font-space font-bold mb-2 text-white">{project.name}</h3>
                        <p className="text-lg text-orange-200/70 mb-4">{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
              <div className="text-center space-y-4 md:space-y-6">
                <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-orange-500/20 backdrop-blur-xl border border-orange-300/40 rounded-full text-xs md:text-sm mb-2 md:mb-4">
                  <span className="text-orange-100 font-medium">Portfolio Loading</span>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                  Coming Soon
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-orange-100/80 max-w-md mx-auto px-4">
                  Our case studies are being crafted with precision
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Brief Section with Blur Overlay */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-screen-2xl mx-auto">
          {/* Blurred Content */}
          <div className="relative">
            <div className="filter blur-md pointer-events-none select-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="hero-quote text-left text-orange-100">
                    "We don't build AI products.
                <br />
                    We build products that happen to be intelligent."
              </h2>
                </div>

              <div className="space-y-6">
                  <p className="text-lg text-orange-200/70 leading-relaxed">
                  Nova AI is a design-driven engineering studio crafting the next generation of
                  conversational systems. Based in Lahore. Working globally.
                  </p>
                  <div className="inline-flex items-center gap-2 text-orange-400 font-medium">
                    More About Us 
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>

            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
              <div className="text-center space-y-4 md:space-y-6">
                <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-orange-500/20 backdrop-blur-xl border border-orange-300/40 rounded-full text-xs md:text-sm mb-2 md:mb-4">
                  <span className="text-orange-100 font-medium">Story in Progress</span>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                  Coming Soon
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-orange-100/80 max-w-md mx-auto px-4">
                  We're crafting our narrative with care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section with Blur Overlay */}
      <section id="contact" className="relative py-32 px-6 md:px-12 lg:px-24 bg-black">
        {/* Blurred Content */}
        <div className="relative">
          <div className="filter blur-md pointer-events-none select-none">
          <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-space font-normal tracking-tight text-orange-100">
              Ready to build something exceptional?
            </h2>
              <button className="inline-flex items-center gap-2 px-12 py-5 bg-gradient-to-r from-orange-500 to-yellow-500 text-black rounded-full font-semibold text-lg">
                Let's Talk <ArrowRight size={24} />
              </button>
            </div>
          </div>

          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
            <div className="text-center space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-orange-500/20 backdrop-blur-xl border border-orange-300/40 rounded-full text-xs md:text-sm mb-2 md:mb-4">
                <span className="text-orange-100 font-medium">Contact Form Loading</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Coming Soon
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-orange-100/80 max-w-md mx-auto px-4">
                We're setting up our communication channels
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
