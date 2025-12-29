import { motion } from 'framer-motion';
import { portfolioConfig } from '@/data/portfolio';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const { personal, social } = portfolioConfig;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! I\'ll get back to you soon.');
  };

  return (
    <main className="relative z-10 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">Get In Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">I'd love to hear from you. Let's create something amazing together!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-8">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href={`mailto:${personal.email}`} className="flex items-center gap-4 group">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"><Mail className="h-6 w-6 text-primary" /></div>
                  <div><p className="text-sm text-muted-foreground">Email</p><p className="font-medium">{personal.email}</p></div>
                </a>
                <a href={`tel:${personal.phone}`} className="flex items-center gap-4 group">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"><Phone className="h-6 w-6 text-primary" /></div>
                  <div><p className="text-sm text-muted-foreground">Phone</p><p className="font-medium">{personal.phone}</p></div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl"><MapPin className="h-6 w-6 text-primary" /></div>
                  <div><p className="text-sm text-muted-foreground">Location</p><p className="font-medium">{personal.location}</p></div>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-heading font-bold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {social.github && <a href={social.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors"><Github className="h-6 w-6" /></a>}
                {social.linkedin && <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors"><Linkedin className="h-6 w-6" /></a>}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-heading font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" required className="bg-background/50" />
                <Input type="email" placeholder="Your Email" required className="bg-background/50" />
              </div>
              <Input placeholder="Subject" required className="bg-background/50" />
              <Textarea placeholder="Your Message" rows={5} required className="bg-background/50" />
              <Button type="submit" size="lg" className="w-full btn-gradient text-white"><Send className="mr-2 h-5 w-5" />Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
