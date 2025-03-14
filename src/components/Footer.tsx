
import React from 'react';
import { CreditCard } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleFooterLinkClick = (link: string) => {
    toast({
      title: link,
      description: `You've clicked on the ${link} link.`,
      variant: "default",
    });
  };

  const footerColumns = [
    {
      title: 'Product',
      links: ['Features', 'How It Works', 'Pricing', 'Security']
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Blog', 'Press']
    },
    {
      title: 'Resources',
      links: ['Help Center', 'Contact', 'Terms', 'Privacy']
    }
  ];

  const socialLinks = ['Twitter', 'Facebook', 'Instagram', 'LinkedIn'];

  return (
    <footer className="py-12 bg-secondary">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight">PayJoy</span>
            </div>
            <p className="text-muted-foreground mb-4">
              The future of seamless payments with UPI Tap-to-Pay technology.
            </p>
          </div>
          
          {footerColumns.map((column, i) => (
            <div key={i}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        handleFooterLinkClick(link);
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2023 PayJoy. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href="#" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleFooterLinkClick(social);
                }}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
