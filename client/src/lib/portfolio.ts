export type ProjectCategory = 'ui' | 'ux' | 'web' | 'all';

export interface Project {
  title: string;
  tags: string;
  description: string;
  image: string;
  category: ProjectCategory;
  url: string;
}

export const projects: Project[] = [
  {
    title: "E-commerce App Design",
    tags: "UI Design / Mobile App",
    description: "A complete e-commerce solution with a focus on user experience and conversion optimization.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    category: "ui",
    url: "#"
  },
  {
    title: "Banking Dashboard",
    tags: "UX Design / Web App",
    description: "A comprehensive banking dashboard that simplifies complex financial data visualization.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    category: "ux",
    url: "#"
  },
  {
    title: "Travel Website",
    tags: "Web Development / Frontend",
    description: "A responsive travel booking website with immersive content and seamless booking flow.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    category: "web",
    url: "#"
  },
  {
    title: "Fitness Tracking App",
    tags: "UI Design / Mobile App",
    description: "A fitness tracking app with progress visualization and workout customization.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    category: "ui",
    url: "#"
  },
  {
    title: "Educational Platform",
    tags: "UX Design / Web Platform",
    description: "An accessible learning platform that enhances student engagement and knowledge retention.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    category: "ux",
    url: "#"
  },
  {
    title: "Creative Agency Website",
    tags: "Web Development / Frontend",
    description: "A creative agency website with dynamic content and smooth animations.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    category: "web",
    url: "#"
  }
];
