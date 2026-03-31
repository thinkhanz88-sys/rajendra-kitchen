import { Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="wood-gradient text-primary-foreground">
      <div className="container-narrow section-padding pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">
              Rajendra <span className="text-gold-gradient">Traders</span>
            </h3>
            <p className="font-body text-sm opacity-70 leading-relaxed">
              Premium modular kitchen & wardrobe solutions since 1995. Trusted by 10,000+ families across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Services", "Kitchen Types", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+917869543555" className="font-body text-sm opacity-70 hover:opacity-100 flex items-center gap-2 transition-opacity">
                <Phone className="w-4 h-4" /> +91 7869543555
              </a>
              <a href="https://wa.me/917869543555" target="_blank" rel="noopener noreferrer" className="font-body text-sm opacity-70 hover:opacity-100 flex items-center gap-2 transition-opacity">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href="mailto:491rajendra@gmail.com" className="font-body text-sm opacity-70 hover:opacity-100 flex items-center gap-2 transition-opacity">
                <Mail className="w-4 h-4" /> 491rajendra@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-xs opacity-50">
            © {new Date().getFullYear()} Rajendra Traders. All rights reserved. | Crafted with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
