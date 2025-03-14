
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Send, Mail, MessageSquare, User, Clock, Phone, Linkedin, Globe, Award } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast({
        title: "Message sent! ✅",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Something went wrong ❌",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />,
      title: "Phone",
      value: "+91 9899854206",
      link: "tel:+919899854206"
    },
    {
      icon: <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />,
      title: "Email",
      value: "anujgarg3366@gmail.com",
      link: "mailto:anujgarg3366@gmail.com"
    },
    {
      icon: <Linkedin className="h-5 w-5 text-muted-foreground mt-0.5" />,
      title: "LinkedIn",
      value: "anujgarg3366",
      link: "https://www.linkedin.com/in/anujgarg3366/"
    },
    {
      icon: <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />,
      title: "Portfolio",
      value: "portfolio-anuj.netlify.app",
      link: "https://portfolio-anuj.netlify.app/"
    }
  ];

  const topSkills = [
    "Data Structures & Algorithms",
    "Full-Stack Development",
    "Java",
    "Problem Solving",
    "Web Development"
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-muted/30 -z-10"></div>
      <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-background to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-t from-background to-transparent -z-10"></div>
      <div className="absolute -bottom-[30%] -right-[20%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-10 h-10 bg-yellow-500/10 rounded-full blur-lg animate-pulse -z-10"></div>
      <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-emerald-500/10 rounded-full blur-lg animate-pulse delay-300 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center animate-slide-up relative inline-block mx-auto">
          <span className="text-gradient">Get In Touch</span>
          <span className="absolute -top-5 -right-5 text-2xl animate-bounce-slow hidden md:block">📬</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 animate-slide-up animate-delay-100">
          Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible! 👇
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-border/60 hover:border-primary/30 transition-all duration-300 animate-slide-up animate-delay-200">
                <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" /> Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 flex items-center gap-1">
                      <User className="h-4 w-4 text-muted-foreground" /> Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-background/50 backdrop-blur-sm focus:bg-background transition-all duration-300 border-border/60 focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 flex items-center gap-1">
                      <Mail className="h-4 w-4 text-muted-foreground" /> Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-background/50 backdrop-blur-sm focus:bg-background transition-all duration-300 border-border/60 focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 flex items-center gap-1">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" /> Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={5}
                      className="bg-background/50 backdrop-blur-sm focus:bg-background transition-all duration-300 border-border/60 focus:border-primary"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full group shadow-lg hover:shadow-primary/20"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message 
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-6 animate-slide-up animate-delay-300">
              <div className="bg-card/30 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-border/60 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" /> Contact Info
                </h3>
                <ul className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      {item.icon}
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <a 
                          href={item.link} 
                          className="text-sm text-muted-foreground group-hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.value}
                        </a>
                      </div>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-muted-foreground">
                        Usually within 24 hours ⚡
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card/30 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-border/60 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" /> Top Skills
                </h3>
                <ul className="space-y-2">
                  {topSkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2 p-2 bg-background/40 rounded-lg">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-card/30 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-border/60 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">📋 Looking For</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 p-2 bg-background/40 rounded-lg">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Full-time opportunities
                  </li>
                  <li className="flex items-center gap-2 p-2 bg-background/40 rounded-lg">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Freelance projects
                  </li>
                  <li className="flex items-center gap-2 p-2 bg-background/40 rounded-lg">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Open source collaborations
                  </li>
                  <li className="flex items-center gap-2 p-2 bg-background/40 rounded-lg">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Networking with fellow developers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
