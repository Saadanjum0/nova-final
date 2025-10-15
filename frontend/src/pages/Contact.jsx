import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import FadeIn from '../components/animations/FadeIn';
import NovaButton from '../components/ui/NovaButton';
import { Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // TODO: Connect to backend API or email service
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
  };

  return (
    <div className="bg-black text-white pt-20">
      {/* Hero */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-space font-light tracking-tight mb-8">
              Let's build something intelligent.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto">
          {!isSubmitted ? (
            <FadeIn>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-nova-text-primary mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className="w-full px-6 py-4 bg-nova-bg-raised border border-nova-glass-border text-nova-text-primary placeholder-nova-text-tertiary focus:border-nova-accent focus:outline-none transition-colors rounded-none"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-nova-text-primary mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full px-6 py-4 bg-nova-bg-raised border border-nova-glass-border text-nova-text-primary placeholder-nova-text-tertiary focus:border-nova-accent focus:outline-none transition-colors rounded-none"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-lg font-medium text-nova-text-primary mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    {...register('company')}
                    className="w-full px-6 py-4 bg-nova-bg-raised border border-nova-glass-border text-nova-text-primary placeholder-nova-text-tertiary focus:border-nova-accent focus:outline-none transition-colors rounded-none"
                    placeholder="Your company (optional)"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-nova-text-primary mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={6}
                    className="w-full px-6 py-4 bg-nova-bg-raised border border-nova-glass-border text-nova-text-primary placeholder-nova-text-tertiary focus:border-nova-accent focus:outline-none transition-colors rounded-none resize-none"
                    placeholder="Describe your project, goals, and how we can help..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <NovaButton
                  type="submit"
                  variant="primary"
                  className="w-full text-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message →'}
                </NovaButton>
              </form>
            </FadeIn>
          ) : (
            <FadeIn>
              <div className="bg-nova-bg-raised border border-nova-success p-12 rounded-none text-center space-y-6">
                <CheckCircle size={64} className="text-nova-success mx-auto" />
                <h2 className="text-3xl font-space font-semibold text-nova-text-primary">
                  Message Sent!
                </h2>
                <p className="text-lg text-nova-text-secondary">
                  We'll respond within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-nova-accent hover:text-nova-accent-bright transition-colors font-medium"
                >
                  Send another message
                </button>
              </div>
            </FadeIn>
          )}

          {/* Contact Info */}
          <FadeIn delay={0.2}>
            <div className="mt-16 space-y-6">
              <div className="flex items-center gap-4 text-nova-text-secondary">
                <Mail size={24} className="text-nova-accent" />
                <a
                  href="mailto:hello@novaai.studio"
                  className="text-lg hover:text-nova-accent transition-colors"
                >
                  hello@novaai.studio
                </a>
              </div>
              <div className="flex items-center gap-4 text-nova-text-secondary">
                <MapPin size={24} className="text-nova-accent" />
                <span className="text-lg">Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-4 text-nova-text-secondary">
                <Clock size={24} className="text-nova-accent" />
                <span className="text-lg">PKT (UTC+5)</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Contact;