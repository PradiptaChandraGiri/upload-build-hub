import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { portfolioConfig } from '@/data/portfolio';
import { GraduationCap, Briefcase, Heart, Award, Code, Target, Zap } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const About = () => {
  const { personal, education, experience, interests, achievements } = portfolioConfig;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="relative z-10 min-h-screen pt-24 pb-0">
      <div className="container mx-auto px-4 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">About</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text mt-2 mb-4">About Me</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Get to know me better - my background, journey, and passion for technology</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2 }} 
            className="lg:col-span-1"
          >
            <div className="glass rounded-3xl p-6 sticky top-24">
              <div className="relative mb-6">
                <img 
                  src={profileImage} 
                  alt={personal.name} 
                  className="w-full aspect-square object-cover rounded-2xl" 
                />
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-3 -right-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl px-4 py-2 text-sm font-semibold shadow-lg"
                >
                  Open to Work
                </motion.div>
              </div>
              <h2 className="text-2xl font-heading font-bold mb-2">{personal.name}</h2>
              <p className="text-primary font-medium mb-4">{personal.title}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{personal.bio}</p>
              
              <div className="mt-6 pt-6 border-t border-border/50 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <span>{personal.university}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Target className="h-4 w-4 text-primary" />
                  <span>{personal.degree}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 space-y-6"
          >
            {/* Education */}
            <motion.div variants={itemVariants} className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Education</h3>
              </div>
              {education.map((edu, i) => (
                <div key={i} className="relative pl-8 border-l-2 border-primary/30 ml-3">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                  <h4 className="font-bold text-lg">{edu.degree}</h4>
                  <p className="text-primary font-medium">{edu.major}</p>
                  <p className="text-muted-foreground">{edu.institution} • {edu.duration}</p>
                  <ul className="mt-3 space-y-1">
                    {edu.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Zap className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            {/* Experience */}
            <motion.div variants={itemVariants} className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Experience</h3>
              </div>
              {experience.map((exp, i) => (
                <div key={i} className="relative pl-8 border-l-2 border-primary/30 ml-3">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                  <h4 className="font-bold text-lg">{exp.title}</h4>
                  <p className="text-primary font-medium">{exp.organization} • {exp.duration}</p>
                  <p className="text-muted-foreground mt-2">{exp.description}</p>
                  <ul className="mt-3 space-y-1">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Award className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants} className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Achievements</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    <Code className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={itemVariants} className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, i) => (
                  <motion.span 
                    key={i} 
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:border-primary/40 transition-colors cursor-default"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default About;
