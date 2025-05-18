import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Trophy, Check } from "lucide-react";

const skills = [
  "User Interface Design",
  "User Experience Design",
  "Frontend Development",
  "Responsive Web Design"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="About me" 
                className="w-full h-auto rounded-2xl shadow-xl" 
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="text-accent">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Award-winning</p>
                    <p className="font-bold">UI/UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1.5 bg-primary mb-6 rounded-full"></div>
            
            <p className="text-gray-600 mb-6">
              I'm a passionate UI/UX designer and developer with over 5 years of experience creating 
              digital products for clients around the world. My expertise includes user research, 
              wireframing, prototyping, and implementing responsive designs.
            </p>
            
            <p className="text-gray-600 mb-8">
              I believe in a user-centered approach to design, creating experiences that are not only 
              visually appealing but also intuitive and accessible. My goal is to bridge the gap between 
              user needs and business objectives through thoughtful design.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
            
            <Button 
              asChild
              className="px-8 py-6 bg-primary text-white font-medium rounded-full shadow-md hover:bg-primary-dark transition-colors inline-flex items-center"
            >
              <a href="/John_Doe_CV.pdf" download>
                <span>Download CV</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
