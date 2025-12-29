import { motion } from 'framer-motion';
import { portfolioConfig } from '@/data/portfolio';

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
    <main className="relative z-10 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">My Skills</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Technologies and tools I work with to bring ideas to life</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass rounded-3xl p-8"
            >
              <h3 className="text-xl font-heading font-bold mb-6 gradient-text">{category.title}</h3>
              <div className="space-y-5">
                {category.data.map((skill, index) => (
                  <motion.div key={skill.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: catIndex * 0.1 + index * 0.05 }}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Skills;
