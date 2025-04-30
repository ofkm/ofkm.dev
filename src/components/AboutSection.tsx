import { BiCodeAlt } from 'react-icons/bi';
import { MdOutlineScience, MdCode } from 'react-icons/md';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white/50 to-blue-50/30 dark:from-slate-900 dark:to-blue-950/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">About OFKM</h2>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
            OFKM (Open-Free Kyle Mendell) is my personal GitHub organization where I work on various open source projects.
            I'm a software developer passionate about building useful tools and exploring new technologies.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            This organization serves as a home for my personal projects, experiments, and contributions to the open source community.
            I believe in creating software that's both functional and accessible to everyone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-[var(--card-radius)] bg-white dark:bg-slate-800/50 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 bubble-glow backdrop-blur-sm">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 text-white rounded-[var(--bubble-radius)] flex items-center justify-center mb-6 -mt-12 shadow-lg">
              <BiCodeAlt size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Open Source</h3>
            <p className="text-slate-600 dark:text-slate-300">
              All projects are open source and available for anyone to use, modify, or contribute to. I believe in the power of shared knowledge.
            </p>
          </div>
          <div className="p-8 rounded-[var(--card-radius)] bg-white dark:bg-slate-800/50 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 bubble-glow backdrop-blur-sm">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 text-white rounded-[var(--bubble-radius)] flex items-center justify-center mb-6 -mt-12 shadow-lg">
              <MdOutlineScience size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Experimentation</h3>
            <p className="text-slate-600 dark:text-slate-300">
              I use these projects to experiment with new technologies, languages, and frameworks—sharing what I learn along the way.
            </p>
          </div>
          <div className="p-8 rounded-[var(--card-radius)] bg-white dark:bg-slate-800/50 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 bubble-glow backdrop-blur-sm">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 text-white rounded-[var(--bubble-radius)] flex items-center justify-center mb-6 -mt-12 shadow-lg">
              <MdCode size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Practical Solutions</h3>
            <p className="text-slate-600 dark:text-slate-300">
              I focus on building tools and solutions for real-world problems that I encounter in my own development work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}