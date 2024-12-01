import React from 'react';
import { Project } from './types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group cursor-pointer rounded-2xl border border-[#E5E7EB] overflow-hidden bg-white h-full flex flex-col"
      onClick={onClick}
    >
      <div className="w-full aspect-[16/9]">
        <img 
          src={project.image} 
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="border-t border-[#E5E7EB] flex-1">
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
              {project.category}
            </span>
          </div>

          <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
          <p className="text-gray-600 text-sm">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;