import { BsArrowDownCircle } from 'react-icons/bs';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
              OFKM
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-200">
              Personal Open Source Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              A collection of open source projects, tools, and experiments created by Kyle Mendell.
              Building software that I find useful and sharing it with the community.
            </p>
            <div className="flex gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 text-white rounded-full shadow-md hover:shadow-lg transition font-medium flex items-center gap-2"
              >
                View Projects
                <BsArrowDownCircle />
              </a>
              <a 
                href="#about" 
                className="px-6 py-3 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-full transition font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="relative h-72 w-72 md:h-96 md:w-96">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/40 to-blue-700/40 dark:from-blue-400/30 dark:to-blue-600/30 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              
              <div className="relative h-full w-full rounded-full p-2 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 shadow-xl bubble-glow overflow-hidden">
                <div className="h-full w-full rounded-full bg-white dark:bg-slate-900 p-4 flex items-center justify-center overflow-hidden">
                  <div className="relative h-full w-full">
                    <Image 
                      src="/klogo-bare.png" 
                      alt="OFKM Logo" 
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 288px, 384px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}