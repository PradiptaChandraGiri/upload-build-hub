import { motion } from 'framer-motion';
import { portfolioConfig } from '@/data/portfolio';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const { projects } = portfolioConfig;

  return (
    <main className="relative z-10 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">My Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Explore my portfolio of web applications, IoT systems, and innovative solutions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden card-hover group"
            >
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex gap-2">
                    {project.githubLink && (
                      <Button asChild size="sm" variant="secondary"><a href={project.githubLink} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4 mr-1" />Code</a></Button>
                    )}
                    {project.liveLink && (
                      <Button asChild size="sm"><a href={project.liveLink} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4 mr-1" />Live</a></Button>
                    )}
                  </div>
                </div>
                <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{project.status}</span>
              </div>
              <div className="p-6">
                <span className="text-primary text-sm font-medium">{project.category}</span>
                <h3 className="text-xl font-heading font-bold mt-1 mb-3">{project.shortTitle}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-muted rounded-md text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
