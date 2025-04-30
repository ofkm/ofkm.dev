export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">About OFKM</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
            OFKM (Open-Free Kyle Mendell) is my personal GitHub organization where I work on various open source projects.
            I'm a software developer passionate about building useful tools and exploring new technologies.
          </p>
          <p className="text-lg mb-8 text-slate-700 dark:text-slate-300">
            This organization serves as a home for my personal projects, experiments, and contributions to the open source community.
            I believe in creating software that's both functional and accessible to everyone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 shadow-sm">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Open Source</h3>
            <p className="text-slate-600 dark:text-slate-300">
              All projects are open source and available for anyone to use, modify, or contribute to. I believe in the power of shared knowledge.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 shadow-sm">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9.5 2.672a.5.5 0 1 0 1 0V1.5a.5.5 0 0 0-1 0v1.172a4.5 4.5 0 0 0-.666.89.5.5 0 1 0 .832.534c.161-.254.34-.482.538-.679z"/>
                <path fillRule="evenodd" d="M8 1a7 7 0 1 0 4.024 12.7.5.5 0 0 1 .71.71l-.045.045a8 8 0 1 1 .184-11.37.5.5 0 0 1-.668.744A6.981 6.981 0 0 0 8 1zm0 13a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
                <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6h-3.5a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Experimentation</h3>
            <p className="text-slate-600 dark:text-slate-300">
              I use these projects to experiment with new technologies, languages, and frameworks—sharing what I learn along the way.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 shadow-sm">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Practical Solutions</h3>
            <p className="text-slate-600 dark:text-slate-300">
              I focus on building tools and solutions for real-world problems that I encounter in my own development work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}