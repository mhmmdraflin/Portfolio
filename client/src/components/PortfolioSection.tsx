import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { usePortfolioFilter } from "@/hooks/usePortfolioFilter";
import { projects, ProjectCategory } from "@/lib/portfolio";

export default function PortfolioSection() {
  const { filteredProjects, activeFilter, setFilter } = usePortfolioFilter(projects);

  return (
    <section id="portfolio" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-2">Portfolio Showcase</h2>
          <div className="w-20 h-1.5 bg-primary mb-6 rounded-full mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work across various industries and project types.
          </p>
        </motion.div>
        
        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
      </div>
    </section>
  );
}
