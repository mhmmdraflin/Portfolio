import { motion } from "framer-motion";

const certificates = [
  {
    title: "UX Design Professional",
    issuer: "Google",
    image: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Comprehensive certification covering all aspects of user experience design process."
  },
  {
    title: "Front-End Development",
    issuer: "Meta",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Advanced course covering modern JavaScript frameworks and responsive design."
  },
  {
    title: "Design Excellence Award",
    issuer: "Awwwards",
    image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Recognized for outstanding web design and user experience innovation."
  }
];

export default function CertificatesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-2">Certificates & Awards</h2>
          <div className="w-20 h-1.5 bg-primary mb-6 rounded-full mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications and awards that validate my expertise and commitment to excellence in the field.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div 
              key={index}
              className="bg-light rounded-xl shadow-sm overflow-hidden transform hover:scale-105 transition-transform"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img 
                src={certificate.image} 
                alt={certificate.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-1">{certificate.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{certificate.issuer}</p>
                <p className="text-gray-700">{certificate.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
