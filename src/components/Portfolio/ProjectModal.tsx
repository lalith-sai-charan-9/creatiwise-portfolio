import React from 'react';
import { X, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Project } from './types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl max-w-5xl w-full my-8">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-[400px] md:h-full">
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            />
          </div>
          
          <div className="p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
                {project.category}
              </span>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
            <p className="text-gray-600 mb-8">{project.description}</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">The Challenge</h3>
                <p className="text-gray-600">{project.challenge}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Our Solution</h3>
                <p className="text-gray-600">{project.solution}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Key Results</h3>
                <ul className="space-y-2">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex gap-4">
              {project.liveSiteUrl && (
                <a
                  href={project.liveSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                >
                  <span>View Live Site</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              )}
              {project.caseStudyUrl && (
                <a
                  href={project.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;