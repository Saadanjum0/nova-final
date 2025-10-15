import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';
import Badge from '../components/ui/NovaBadge';
import { X } from 'lucide-react';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Vocalia',
      category: 'Voice AI',
      status: 'In Development',
      statusVariant: 'accent',
      gradient: 'from-indigo-500 to-purple-600',
      problem: 'Building natural voice interactions at scale is complex. Most solutions require extensive infrastructure and lack real-time responsiveness.',
      solution: 'Vocalia provides a complete voice AI infrastructure with sub-100ms latency, natural language understanding, and seamless integration capabilities.',
      technologies: ['WebRTC', 'Neural Speech Synthesis', 'Real-time NLU', 'Cloud Infrastructure'],
      impact: 'Enables developers to add voice capabilities to any application in minutes, not months.'
    },
    {
      id: 2,
      name: 'RAGify',
      category: 'Knowledge Systems',
      status: 'Concept',
      statusVariant: 'default',
      gradient: 'from-violet-500 to-fuchsia-600',
      problem: 'Traditional search fails to understand context. Users get irrelevant results that waste time and reduce productivity.',
      solution: 'RAGify uses advanced retrieval-augmented generation to provide context-aware answers from your knowledge base with citations.',
      technologies: ['Vector Embeddings', 'RAG Architecture', 'Semantic Search', 'LLM Integration'],
      impact: 'Transforms static documentation into an intelligent assistant that understands user intent.'
    },
    {
      id: 3,
      name: 'Rasta',
      category: 'Digital Experience',
      status: 'Live',
      statusVariant: 'success',
      gradient: 'from-blue-500 to-cyan-600',
      problem: 'Public transit systems lack real-time intelligence. Commuters face uncertainty and inefficiency.',
      solution: 'Rasta combines real-time data, predictive analytics, and intuitive UX to make urban mobility seamless.',
      technologies: ['Real-time APIs', 'Predictive ML', 'Mobile-First Design', 'Progressive Web App'],
      impact: 'Reduced average commute planning time by 67% for 10,000+ daily users.'
    },
    {
      id: 4,
      name: 'Future Project',
      category: 'TBD',
      status: 'Coming Soon',
      statusVariant: 'default',
      gradient: 'from-emerald-500 to-teal-600',
      problem: 'Stay tuned for our next innovation.',
      solution: 'Something exciting is brewing in the Nova AI labs.',
      technologies: ['TBD'],
      impact: 'Coming soon.'
    }
  ];

  return (
    <div className="bg-black text-white pt-20">
      {/* Header */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-space font-light tracking-tight mb-8">
              Selected Projects
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-nova-text-secondary max-w-3xl mx-auto">
              Internal experiments. Client work. Concepts in motion.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Project Grid */}
      <section className="pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1}>
                <motion.div
                  className="relative overflow-hidden rounded-none h-96 cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}></div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                    <div className="flex gap-3">
                      <Badge variant="accent">{project.category}</Badge>
                      <Badge variant={project.statusVariant}>{project.status}</Badge>
                    </div>
                    <div>
                      <h3 className="text-3xl font-space font-bold mb-2">{project.name}</h3>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-nova-accent font-medium">View Details →</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div className="min-h-screen px-6 py-20 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-nova-bg-raised border border-nova-glass-border rounded-none max-w-4xl w-full p-12 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-nova-text-secondary hover:text-nova-text-primary transition-colors"
                aria-label="Close"
              >
                <X size={32} />
              </button>

              {/* Modal Content */}
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
                    {selectedProject.name}
                  </h2>
                  <div className="flex gap-3">
                    <Badge variant="accent">{selectedProject.category}</Badge>
                    <Badge variant={selectedProject.statusVariant}>{selectedProject.status}</Badge>
                  </div>
                </div>

                {/* Hero Gradient */}
                <div className={`h-64 bg-gradient-to-br ${selectedProject.gradient} rounded-none opacity-80`}></div>

                {/* Problem */}
                <div>
                  <h3 className="text-2xl font-space font-semibold mb-4 text-nova-text-primary">
                    Problem
                  </h3>
                  <p className="text-lg text-nova-text-secondary leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-2xl font-space font-semibold mb-4 text-nova-text-primary">
                    Solution
                  </h3>
                  <p className="text-lg text-nova-text-secondary leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-2xl font-space font-semibold mb-4 text-nova-text-primary">
                    Key Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge key={index} variant="default">{tech}</Badge>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div>
                  <h3 className="text-2xl font-space font-semibold mb-4 text-nova-text-primary">
                    Impact
                  </h3>
                  <p className="text-lg text-nova-text-secondary leading-relaxed">
                    {selectedProject.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Work;