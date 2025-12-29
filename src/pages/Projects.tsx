import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioConfig } from '@/data/portfolio';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const Projects = () => {
  const { projects } = portfolioConfig;
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <main className="relative z-10 min-h-screen pt-24 pb-0">
      <div className="container mx-auto px-4 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text mt-2 mb-4">My Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Explore my portfolio of web applications, IoT systems, and innovative solutions</p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeFilter === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(cat)}
              className={activeFilter === cat ? "btn-gradient text-white" : "btn-glass"}
            >
              {cat === 'All' && <Filter className="h-4 w-4 mr-1" />}
              {cat}
            </Button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      {project.githubLink && (
                        <Button asChild size="sm" className="btn-gradient text-white">
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" />Code
                          </a>
                        </Button>
                      )}
                      {project.liveLink && (
                        <Button asChild size="sm" variant="secondary">
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                    project.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-lg font-heading font-bold mt-1 mb-2 group-hover:text-primary transition-colors">
                    {project.shortTitle}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </main>
  );
};

export default Projects;
