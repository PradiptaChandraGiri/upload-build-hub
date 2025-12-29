import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { portfolioConfig } from '@/data/portfolio';
import profileImage from '@/assets/profile.jpg';
import { useRef } from 'react';

const Hero = () => {
  const { personal, social, stats } = portfolioConfig;
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section ref={containerRef} className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          style={{ y, opacity }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.span variants={itemVariants} className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
              Available for opportunities
            </motion.span>

            <motion.span variants={itemVariants} className="block text-primary font-semibold text-lg">
              Hello, I'm
            </motion.span>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-2 mb-4">
              <span className="gradient-text">{personal.name}</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground mb-2">
              {personal.title}
            </motion.p>

            <motion.p variants={itemVariants} className="text-2xl font-heading font-semibold gradient-text-accent mb-6">
              {personal.tagline}
            </motion.p>

            <motion.p variants={itemVariants} className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
              {personal.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg" className="btn-gradient text-white font-semibold px-8 shadow-lg shadow-primary/25">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-glass group">
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                  <ChevronRight className="ml-1 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-3">
              {social.github && (
                <motion.a 
                  whileHover={{ scale: 1.1, y: -2 }} 
                  whileTap={{ scale: 0.95 }}
                  href={social.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 glass rounded-xl hover:shadow-lg transition-shadow"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
              )}
              {social.linkedin && (
                <motion.a 
                  whileHover={{ scale: 1.1, y: -2 }} 
                  whileTap={{ scale: 0.95 }}
                  href={social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 glass rounded-xl hover:shadow-lg transition-shadow"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              )}
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                href={`mailto:${personal.email}`} 
                className="p-3 glass rounded-xl hover:shadow-lg transition-shadow"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
                style={{ margin: '-30px' }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-secondary/20"
                style={{ margin: '-50px' }}
              />
              
              {/* Glow effect */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-3xl opacity-30"
                style={{ margin: '-20px' }}
              />
              
              {/* Image container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20">
                  <img
                    src={profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
                transition={{ delay: 0.8, duration: 3, repeat: Infinity, repeatType: "reverse" }}
                className="absolute -left-4 top-1/4 glass rounded-xl px-3 py-2 shadow-lg"
              >
                <span className="text-xs font-semibold">🎓 BTech CSE</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, y: [0, 5, 0] }}
                transition={{ delay: 1, duration: 3.5, repeat: Infinity, repeatType: "reverse" }}
                className="absolute -right-4 bottom-1/4 glass rounded-xl px-3 py-2 shadow-lg"
              >
                <span className="text-xs font-semibold">💻 Developer</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <motion.div 
                className="text-3xl md:text-4xl font-bold gradient-text mb-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.1, type: "spring" }}
              >
                {stat.value}+
              </motion.div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-xs mb-2 uppercase tracking-wider">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
