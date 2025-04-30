import { type Project } from "../types";
import Image from "next/image";
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-[var(--card-radius)] overflow-hidden bg-white dark:bg-slate-800/50 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 bubble-glow backdrop-blur-sm">
      <div className={`h-52 ${project.gradientClass} relative overflow-hidden`}>
        {project.imageUrl ? (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="relative h-28 w-28 bg-white dark:bg-slate-800 p-4 rounded-full shadow-lg">
              <Image
                src={project.imageUrl}
                alt={`${project.name} logo`}
                fill
                className="object-contain p-1"
                sizes="(max-width: 768px) 96px, 96px"
              />
            </div>
          </div>
        ) : (
          <span className="font-bold text-2xl">{project.name}</span>
        )}
        {/* Overlay with project name */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-start p-5">
          <span className="font-bold text-xl text-white">{project.name}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">{project.name}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-5">
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap mb-5">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs bg-blue-100/50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={project.url}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-2 font-medium transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={18} />
          View on GitHub
        </a>
      </div>
    </div>
  );
}