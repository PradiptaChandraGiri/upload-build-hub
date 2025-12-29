import { motion } from 'framer-motion';
import { portfolioConfig } from '@/data/portfolio';
import Footer from '@/components/Footer';
import { Code2, Globe, Database, Wrench, Brain } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Programming Languages': <Code2 className="h-6 w-6" />,
  'Web Technologies': <Globe className="h-6 w-6" />,
  'Databases': <Database className="h-6 w-6" />,
  'Tools & Platforms': <Wrench className="h-6 w-6" />,
  'Currently Learning': <Brain className="h-6 w-6" />,
};

const Skills = () => {
  const { skills } = portfolioConfig;
  const categories = [
    { title: 'Programming Languages', data: skills.programming },
    { title: 'Web Technologies', data: skills.web },
    { title: 'Databases', data: skills.database },
    { title: 'Tools & Platforms', data: skills.tools },
    { title: 'Currently Learning', data: skills.learning },
  ];

  return (
    <main className="relative z-10 min-h-screen pt-24 pb-0">
      <div className="container mx-auto px-4 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Expertise</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text mt-2 mb-4">My Skills</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Technologies and tools I work with to bring ideas to life</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              className={`glass rounded-3xl p-8 ${category.title === 'Currently Learning' ? 'md:col-span-2' : ''}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {iconMap[category.title]}
                </div>
                <h3 className="text-xl font-heading font-bold">{category.title}</h3>
              </div>
              
              <div className={`${category.title === 'Currently Learning' ? 'grid md:grid-cols-2 gap-x-8' : ''} space-y-5`}>
                {category.data.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm group-hover:text-primary transition-colors">{skill.name}</span>
                      <span className="text-primary font-semibold text-sm">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm mb-4">Tech Stack I Use</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'JavaScript', 'React', 'Node.js', 'MySQL', 'Git', 'C++', 'HTML/CSS'].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 glass rounded-xl text-sm font-medium hover:shadow-lg transition-shadow"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default Skills;
