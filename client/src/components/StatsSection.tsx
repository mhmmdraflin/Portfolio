import { motion } from "framer-motion";

const stats = [
  { value: "48+", label: "Projects Completed" },
  { value: "12", label: "Certificates" },
  { value: "5+", label: "Years of Experience" }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-light rounded-xl shadow-sm p-8 text-center transform hover:scale-105 transition-transform"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
