import { FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl text-blue-400 mb-4">OFKM</h3>
            <p className="text-slate-400">
              Personal open source projects and experiments by Kyle Mendell.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-400 hover:text-blue-400 transition">About</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-blue-400 transition">Projects</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com/ofkm" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition">
                <FaGithub size={24} />
              </a>
              <a href="https://x.com/OfficialKSM_" className="text-slate-400 hover:text-blue-400 transition">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>© {new Date().getFullYear()} Kyle Mendell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}