import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp, MapPin, Phone } from 'lucide-react';
import { portfolioConfig } from '@/data/portfolio';

const Footer = () => {
  const { personal, social } = portfolioConfig;
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-border/50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-heading font-bold gradient-text mb-4">PCG</h3>
            <p className="text-muted-foreground mb-4 max-w-md">{personal.tagline}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <MapPin className="h-4 w-4" />
              <span>{personal.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>{personal.phone}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 glass rounded-lg hover:scale-110 transition-all hover:shadow-lg"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 glass rounded-lg hover:scale-110 transition-all hover:shadow-lg"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 glass rounded-lg hover:scale-110 transition-all hover:shadow-lg"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">{personal.email}</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} {personal.name}. Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> in India
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & Built by <span className="gradient-text font-medium">{personal.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
