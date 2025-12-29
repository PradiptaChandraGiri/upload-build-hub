import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '@/data/portfolio';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Footer from '@/components/Footer';

const Contact = () => {
  const { personal, social } = portfolioConfig;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    toast.success('Message sent successfully!', {
      description: "I'll get back to you within 24-48 hours.",
    });
    
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main className="relative z-10 min-h-screen pt-24 pb-0">
      <div className="container mx-auto px-4 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text mt-2 mb-4">Get In Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">I'd love to hear from you. Let's create something amazing together!</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2 }} 
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Contact Information
              </h3>
              <div className="space-y-5">
                <motion.a 
                  href={`mailto:${personal.email}`} 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                    <p className="font-medium text-sm">{personal.email}</p>
                  </div>
                </motion.a>
                
                <motion.a 
                  href={`tel:${personal.phone}`} 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                    <p className="font-medium text-sm">{personal.phone}</p>
                  </div>
                </motion.a>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="font-medium text-sm">{personal.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-heading font-bold mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {social.github && (
                  <motion.a 
                    whileHover={{ scale: 1.1, y: -3 }}
                    href={social.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </motion.a>
                )}
                {social.linkedin && (
                  <motion.a 
                    whileHover={{ scale: 1.1, y: -3 }}
                    href={social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </motion.a>
                )}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">Response Time</span>
              </div>
              <p className="text-sm text-muted-foreground">
                I typically respond within 24-48 hours. For urgent matters, please call directly.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 glass rounded-3xl p-8"
          >
            <h3 className="text-xl font-heading font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Name</label>
                  <Input 
                    placeholder="John Doe" 
                    required 
                    className="bg-background/50 border-border/50 focus:border-primary" 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="bg-background/50 border-border/50 focus:border-primary" 
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input 
                  placeholder="How can I help you?" 
                  required 
                  className="bg-background/50 border-border/50 focus:border-primary" 
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Write your message here..." 
                  rows={5} 
                  required 
                  className="bg-background/50 border-border/50 focus:border-primary resize-none" 
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full btn-gradient text-white font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
