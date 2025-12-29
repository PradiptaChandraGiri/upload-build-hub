import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { portfolioConfig } from '@/data/portfolio';

const Resume = () => {
  const { personal, skills, education } = portfolioConfig;

  return (
    <main className="relative z-10 min-h-screen pt-24 pb-0">
      <div className="container mx-auto px-4 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-8"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Resume</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text mt-2 mb-4">My Resume</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">View or download my professional resume</p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button asChild size="lg" className="btn-gradient text-white shadow-lg shadow-primary/25">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />Download PDF
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-glass">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />Open in New Tab
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Quick Overview
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>{personal.degree}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>{personal.university}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>3+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>15+ Technologies</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-heading font-bold text-lg mb-4">Top Skills</h3>
              <div className="space-y-3">
                {skills.programming.slice(0, 4).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="skill-bar h-1.5">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* PDF Viewer */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 glass rounded-3xl p-4"
          >
            <iframe 
              src="/resume.pdf" 
              className="w-full h-[70vh] rounded-2xl border-0" 
              title="Resume PDF"
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Resume;
