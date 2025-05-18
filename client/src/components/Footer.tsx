export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="py-10 bg-dark text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-lg font-medium mb-4 md:mb-0">
            John Doe<span className="text-accent">.</span> &copy; {currentYear}
          </p>
          
          <div className="flex space-x-6">
            {links.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
