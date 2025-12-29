import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  return (
    <main className="relative z-10 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">My Resume</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">View or download my professional resume</p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="btn-gradient text-white">
              <a href="/resume.pdf" download><Download className="mr-2 h-5 w-5" />Download PDF</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-glass">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-2 h-5 w-5" />Open in New Tab</a>
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass rounded-3xl p-4 max-w-4xl mx-auto">
          <iframe src="/resume.pdf" className="w-full h-[80vh] rounded-2xl" title="Resume" />
        </motion.div>
      </div>
    </main>
  );
};

export default Resume;
