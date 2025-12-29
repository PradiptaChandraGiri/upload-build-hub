import { motion } from 'framer-motion';
import { portfolioConfig } from '@/data/portfolio';
import { GraduationCap, Briefcase, Heart, Award } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const About = () => {
  const { personal, education, experience, interests, achievements } = portfolioConfig;

  return (
    <main className="relative z-10 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">About Me</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Get to know me better - my background, journey, and passion for technology</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-1">
            <div className="glass rounded-3xl p-6 sticky top-24">
              <img src={profileImage} alt={personal.name} className="w-full aspect-square object-cover rounded-2xl mb-6" />
              <h2 className="text-2xl font-heading font-bold mb-2">{personal.name}</h2>
              <p className="text-primary font-medium mb-4">{personal.title}</p>
              <p className="text-muted-foreground text-sm">{personal.bio}</p>
            </div>
          </motion.div>

          <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6"><GraduationCap className="h-6 w-6 text-primary" /><h3 className="text-2xl font-heading font-bold">Education</h3></div>
              {education.map((edu, i) => (
                <div key={i} className="border-l-2 border-primary/30 pl-6 ml-3">
                  <h4 className="font-bold text-lg">{edu.degree}</h4>
                  <p className="text-primary">{edu.major}</p>
                  <p className="text-muted-foreground">{edu.institution} • {edu.duration}</p>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6"><Briefcase className="h-6 w-6 text-primary" /><h3 className="text-2xl font-heading font-bold">Experience</h3></div>
              {experience.map((exp, i) => (
                <div key={i} className="border-l-2 border-primary/30 pl-6 ml-3">
                  <h4 className="font-bold text-lg">{exp.title}</h4>
                  <p className="text-primary">{exp.organization} • {exp.duration}</p>
                  <p className="text-muted-foreground mt-2">{exp.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6"><Heart className="h-6 w-6 text-primary" /><h3 className="text-2xl font-heading font-bold">Interests</h3></div>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, i) => (
                  <span key={i} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">{interest}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
