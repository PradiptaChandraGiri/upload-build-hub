import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { portfolioConfig } from '@/data/portfolio';

const SkillsPreview = () => {
  const { skills } = portfolioConfig;
  const topSkills = [
    ...skills.programming.slice(0, 2),
    ...skills.web.slice(0, 2),
    ...skills.database.slice(0, 1),
    ...skills.tools.slice(0, 1),
  ];

  return (
    <section className="section bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Expertise</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground mb-6">
              I've worked with a variety of programming languages, frameworks, and tools. Here's a quick overview of my technical expertise.
            </p>
            <Button asChild variant="outline" className="btn-glass group">
              <Link to="/skills">
                View All Skills
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass rounded-2xl p-6"
          >
            <div className="space-y-4">
              {topSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-medium text-sm">{skill.name}</span>
                    <span className="text-primary font-semibold text-sm">{skill.level}%</span>
                  </div>
                  <div className="skill-bar h-2">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.08 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;
