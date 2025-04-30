export default function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400">
              OFKM
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Personal Open Source Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              A collection of open source projects, tools, and experiments created by Kyle Mendell.
              Building software that I find useful and sharing it with the community.
            </p>
            <div className="flex gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition font-medium"
              >
                View Projects
              </a>
              <a 
                href="#about" 
                className="px-6 py-3 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-full transition font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-blue-600 bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center">
                <div className="text-8xl font-bold text-blue-600 dark:text-blue-400">OFKM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}