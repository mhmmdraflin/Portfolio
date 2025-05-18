import { useState, useMemo } from "react";
import { Project, ProjectCategory } from "@/lib/portfolio";

export function usePortfolioFilter(projects: Project[]) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }
    
    return projects.filter(project => project.category === activeFilter);
  }, [projects, activeFilter]);
  
  const setFilter = (filter: ProjectCategory) => {
    setActiveFilter(filter);
  };
  
  return {
    filteredProjects,
    activeFilter,
    setFilter
  };
}
