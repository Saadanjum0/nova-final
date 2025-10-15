import React from 'react';
import { Palette, Code2, Users } from 'lucide-react';
import FadeIn from '../components/animations/FadeIn';
import NovaCard from '../components/ui/NovaCard';

const About = () => {
  const philosophy = [
    {
      icon: <Palette size={32} className="text-nova-accent" />,
      title: 'Design-Led',
      description: 'Every system starts with user experience. Technology serves clarity, not complexity.'
    },
    {
      icon: <Code2 size={32} className="text-nova-accent" />,
      title: 'Precision Engineering',
      description: "Code that's elegant. Systems that scale. No shortcuts. No technical debt."
    },
    {
      icon: <Users size={32} className="text-nova-accent" />,
      title: 'Human-Centered AI',
      description: 'Intelligence should amplify people, not replace them. We build tools that make humans more capable.'
    }
  ];

  const timeline = [
    {
      number: '01',
      title: 'Discovery',
      description: "We don't start with solutions. We start by understanding the problem space."
    },
    {
      number: '02',
      title: 'Design',
      description: 'Interface and interaction design happen in parallel with system architecture.'
    },
    {
      number: '03',
      title: 'Engineering',
      description: 'Production-grade code from day one. Deployed, monitored, iterated.'
    },
    {
      number: '04',
      title: 'Evolution',
      description: 'AI systems learn. We ensure they learn the right things, the right way.'
    }
  ];

  return (
    <div className="bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-space font-light tracking-tight mb-8">
              We build at the edge of what’s possible.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-nova-text-secondary max-w-3xl mx-auto leading-relaxed">
              Nova AI is where design thinking meets machine intelligence.
              <br />
              Founded in 2024. Remote-first. Obsessed with craft.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Studio Philosophy */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-nova-bg-mid">
        <div className="max-w-screen-2xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-space font-normal tracking-tight text-center mb-20">
              Studio Philosophy
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <NovaCard>
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-space font-semibold mb-4 text-nova-text-primary">
                    {item.title}
                  </h3>
                  <p className="text-base text-nova-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </NovaCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Timeline */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-space font-normal tracking-tight text-center mb-20">
              Our Approach
            </h2>
          </FadeIn>

          <div className="space-y-16">
            {timeline.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Number Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full border-2 border-nova-accent flex items-center justify-center">
                      <span className="text-2xl font-space font-bold text-nova-accent">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-3xl font-space font-semibold text-nova-text-primary">
                      {step.title}
                    </h3>
                    <p className="text-lg text-nova-text-secondary leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < timeline.length - 1 && (
                  <div className="ml-10 h-16 w-0.5 bg-nova-glass-border"></div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Note */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-nova-bg-mid">
        <div className="max-w-screen-xl mx-auto text-center">
          <FadeIn>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-space font-light leading-tight text-nova-text-primary">
                Built by designers who code.
                <br />
                And engineers who design.
              </h2>
              <p className="text-lg text-nova-text-secondary max-w-2xl mx-auto leading-relaxed">
                We believe the best products emerge when technical excellence meets creative vision.
                No handoffs. No silos. Just seamless collaboration.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default About;