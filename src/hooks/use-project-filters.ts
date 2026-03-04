import { Project, ProjectCategory } from '@/types/project';
import { useCallback, useMemo, useState } from 'react';

export type CategoryFilter = ProjectCategory | 'all';

interface UseProjectFiltersReturn {
  // State
  searchQuery: string;
  selectedCategory: CategoryFilter;
  selectedTech: string | null;
  currentPage: number;

  // Computed
  filteredProjects: Project[];
  totalPages: number;
  paginatedProjects: Project[];
  allTechnologies: { name: string; count: number }[];
  categoryCounts: Record<CategoryFilter, number>;

  // Actions
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: CategoryFilter) => void;
  setSelectedTech: (tech: string | null) => void;
  setCurrentPage: (page: number) => void;
  clearFilters: () => void;
  hasActiveFilters: boolean;
}

const ITEMS_PER_PAGE = 9;

const CATEGORY_LABELS: Record<CategoryFilter, string> = {
  all: 'All',
  'web-app': 'Web Apps',
  'ai-ml': 'AI/ML',
  mobile: 'Mobile',
  blockchain: 'Blockchain',
  tool: 'Tools',
};

export { CATEGORY_LABELS };

export function useProjectFilters(
  projects: Project[]
): UseProjectFiltersReturn {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when filters change
  const handleSetSearchQuery = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);

  const handleSetCategory = useCallback((category: CategoryFilter) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  }, []);

  const handleSetTech = useCallback((tech: string | null) => {
    setSelectedTech(tech);
    setCurrentPage(1);
  }, []);

  // Get all unique technologies with counts
  const allTechnologies = useMemo(() => {
    const techMap = new Map<string, number>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => {
        techMap.set(tech, (techMap.get(tech) || 0) + 1);
      });
    });
    return Array.from(techMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [projects]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryFilter, number> = {
      all: projects.length,
      'web-app': 0,
      'ai-ml': 0,
      mobile: 0,
      blockchain: 0,
      tool: 0,
    };
    projects.forEach((project) => {
      counts[project.category]++;
    });
    return counts;
  }, [projects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      if (selectedCategory !== 'all' && project.category !== selectedCategory) {
        return false;
      }

      // Technology filter
      if (selectedTech && !project.technologies.includes(selectedTech)) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesDesc = project.description.toLowerCase().includes(query);
        const matchesTech = project.technologies.some((tech) =>
          tech.toLowerCase().includes(query)
        );
        if (!matchesTitle && !matchesDesc && !matchesTech) {
          return false;
        }
      }

      return true;
    });
  }, [projects, selectedCategory, selectedTech, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  // Clear all filters
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTech(null);
    setCurrentPage(1);
  }, []);

  const hasActiveFilters =
    searchQuery !== '' || selectedCategory !== 'all' || selectedTech !== null;

  return {
    searchQuery,
    selectedCategory,
    selectedTech,
    currentPage,
    filteredProjects,
    totalPages,
    paginatedProjects,
    allTechnologies,
    categoryCounts,
    setSearchQuery: handleSetSearchQuery,
    setSelectedCategory: handleSetCategory,
    setSelectedTech: handleSetTech,
    setCurrentPage,
    clearFilters,
    hasActiveFilters,
  };
}
