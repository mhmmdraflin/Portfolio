import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 md:pr-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h5 className="text-lg font-medium text-gray-600 mb-2">Hello, I'm</h5>
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">John Doe</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">UI/UX Designer & Developer</h2>
            <p className="text-gray-600 mb-8 text-lg">
              I create beautiful, functional, and user-centered digital experiences that help businesses achieve their goals.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                className="px-8 py-6 bg-primary text-white font-medium rounded-full shadow-md hover:bg-primary-dark transition-colors"
              >
                <a href="#contact">Contact Me</a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="px-8 py-6 border border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                <a href="#portfolio">View Projects</a>
              </Button>
              <Button 
                asChild
                variant="ghost" 
                className="px-8 py-6 text-gray-700 font-medium rounded-full hover:bg-gray-100 transition-colors"
              >
                <a href="/John_Doe_CV.pdf" download>Download CV</a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Professional portrait" 
              className="w-full h-auto rounded-2xl shadow-xl" 
            />

            {/* Floating Device with GIF */}
            <div className="absolute -bottom-10 -left-10 md:block hidden">
              <img 
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHFremVkbmgxbTlmMnYxenRtYnAwdTZwMnZvcWgydmxvZTgxZWZkcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif" 
                alt="Mobile design process GIF" 
                className="w-48 rounded-xl shadow-lg border-4 border-white object-cover" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
