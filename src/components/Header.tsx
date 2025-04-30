import { FaGithub } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">OFKM</div>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
        </nav>
        <a 
          href="https://github.com/ofkm" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 py-2 px-5 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 text-white shadow-md hover:shadow-lg transition"
        >
          <FaGithub size={20} />
          GitHub
        </a>
      </div>
    </header>
  );
}