import { type Project } from "../types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition">
      <div className={`h-40 ${project.gradientClass} flex items-center justify-center text-white`}>
        <span className="font-bold text-2xl">{project.name}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap mb-4">
          {project.tags.map((tag: string, index: number) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={project.url}
          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}