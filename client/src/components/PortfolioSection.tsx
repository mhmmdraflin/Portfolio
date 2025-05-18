import { motion } from "framer-motion";
import { Eye, Code, Award, Layers } from "lucide-react";
import { usePortfolioFilter } from "@/hooks/usePortfolioFilter";
import { projects, ProjectCategory } from "@/lib/portfolio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Tech stack data
const techStack = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", type: "frontend" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", type: "language" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", type: "frontend" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", type: "backend" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", type: "backend" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", type: "database" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", type: "database" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", type: "design" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", type: "tools" }
];

export default function PortfolioSection() {
  const { filteredProjects, activeFilter, setFilter } = usePortfolioFilter(projects);

  return (
    <section id="portfolio" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-2">Portfolio Showcase</h2>
          <div className="w-20 h-1.5 bg-primary mb-6 rounded-full mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my work, skills, and achievements to showcase my expertise.
          </p>
        </motion.div>
        
        <Tabs defaultValue="projects" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Layers className="h-4 w-4" />
              <span>Projects</span>
            </TabsTrigger>
            <TabsTrigger value="certificates" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>Certificates</span>
            </TabsTrigger>
            <TabsTrigger value="tech" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span>Tech Stack</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="mt-6">
            {/* Portfolio Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button 
                className={`px-5 py-2 rounded-full font-medium transition-colors ${activeFilter === 'all' ? 'bg-primary text-white' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={`px-5 py-2 rounded-full font-medium transition-colors ${activeFilter === 'ui' ? 'bg-primary text-white' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
                onClick={() => setFilter('ui')}
              >
                UI Design
              </button>
              <button 
                className={`px-5 py-2 rounded-full font-medium transition-colors ${activeFilter === 'ux' ? 'bg-primary text-white' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
                onClick={() => setFilter('ux')}
              >
                UX Design
              </button>
              <button 
                className={`px-5 py-2 rounded-full font-medium transition-colors ${activeFilter === 'web' ? 'bg-primary text-white' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
                onClick={() => setFilter('web')}
              >
                Web Dev
              </button>
            </div>
            
            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={index}
                  className="portfolio-item"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-primary bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <a href={project.url} className="bg-white text-primary p-3 rounded-full">
                          <Eye className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                      <p className="text-gray-600 mb-3 text-sm">{project.tags}</p>
                      <p className="text-gray-700">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Certificates from CertificatesSection */}
              <motion.div 
                className="bg-white rounded-xl shadow-sm overflow-hidden transform hover:scale-105 transition-transform"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="UX Design Professional" 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-1">UX Design Professional</h3>
                  <p className="text-gray-600 text-sm mb-3">Google</p>
                  <p className="text-gray-700">Comprehensive certification covering all aspects of user experience design process.</p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl shadow-sm overflow-hidden transform hover:scale-105 transition-transform"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Front-End Development" 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-1">Front-End Development</h3>
                  <p className="text-gray-600 text-sm mb-3">Meta</p>
                  <p className="text-gray-700">Advanced course covering modern JavaScript frameworks and responsive design.</p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl shadow-sm overflow-hidden transform hover:scale-105 transition-transform"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Design Excellence Award" 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-1">Design Excellence Award</h3>
                  <p className="text-gray-600 text-sm mb-3">Awwwards</p>
                  <p className="text-gray-700">Recognized for outstanding web design and user experience innovation.</p>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="tech" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {techStack.map((tech, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-16 h-16 mb-4" 
                  />
                  <h3 className="font-medium">{tech.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 capitalize">{tech.type}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
