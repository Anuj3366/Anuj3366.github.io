
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, FileText, Download } from "lucide-react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const NavBar = () => {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Configure the resume path to work with both development and production environments
  const resumePath = "/Resume.pdf";

  const navItems = [
    { name: "About", href: "#about", icon: null },
    { name: "Projects", href: "#projects", icon: null },
    { name: "Contact", href: "#contact", icon: null },
    { 
      name: "Resume", 
      href: resumePath, 
      icon: <FileText className="h-4 w-4" />,
      download: true 
    },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-gradient">
          Anuj Garg
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="animate-fade-in">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-6 mt-10">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-xl hover:text-primary transition-colors animate-slide-in-right flex items-center gap-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    download={item.download}
                    target={item.download ? "_blank" : undefined}
                    rel={item.download ? "noopener noreferrer" : undefined}
                  >
                    {item.icon}
                    {item.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-primary transition-colors animate-fade-in flex items-center gap-1 group"
                style={{ animationDelay: `${index * 0.1}s` }}
                download={item.download}
                target={item.download ? "_blank" : undefined}
                rel={item.download ? "noopener noreferrer" : undefined}
              >
                {item.icon}
                {item.name}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
