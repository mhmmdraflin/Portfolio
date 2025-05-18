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
            <div className="relative flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQEWdh_zo7H-dQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726310165264?e=2147483647&v=beta&t=XFChVf_Rc4WRiCDkbLZAdX7tbPfv2Vbq5In_1wpclPE" 
                  alt="About me" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="text-accent">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Undergraduate Informatics Students</p>
                    <p className="font-bold">Mobile Development</p>
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
              I am an Informatics student in Universitas Bhinneka Nusantara with expertise in Android app development using Kotlin and Java. I am passionate about building innovative and user-friendly mobile applications, continually enhancing my skills to deliver high-quality solutions in mobile development.
            </p>
            
            <p className="text-gray-600 mb-8">
              I believe in a user-centered approach to mobile development, focusing on creating applications that are not only functional and innovative but also intuitive and accessible. My goal is to deliver high-quality mobile solutions that effectively meet user needs while supporting business objectives.
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
              <a href="/Muhammad_Rafli_Nurfathan_CV.pdf" download>
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
