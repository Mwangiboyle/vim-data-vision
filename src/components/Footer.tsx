import { Github, Linkedin, Twitter, Mail, Circle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Mwangiboyle", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/josephmwangiboyle/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">ML Portfolio</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Passionate about building intelligent systems and transforming data into actionable insights. 
              Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Ready to discuss your next AI project?</p>
              <a 
                href="mailto:josephmwangi6039@gmail.com"
                className="block hover:text-primary-foreground transition-colors"
              >
                josephmwangi6039@gmail.com
              </a>
              <a 
                href="tel:+15551234567"
                className="block hover:text-primary-foreground transition-colors"
              >
                +254 746462591
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} ML Portfolio. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-primary-foreground/80 text-sm">
              <span>Built with</span>
              <Circle className="w-4 h-4 text-red-400 fill-current" />
              <span>and</span>
              <span className="text-neovim font-semibold">Neovim</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
