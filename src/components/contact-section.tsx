
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { WaitlistDialog } from "./waitlist-dialog";
import { Send, Twitter, Linkedin, Instagram } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-white dark:bg-slate-900 py-24">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Get in Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-qwalo-blue to-qwalo-orange mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            Have questions about Qwalo.ai or want to learn more? Reach out to our team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in">
            <div className="space-y-8 max-w-md">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-medium">Subscribe for Updates</h3>
                <p className="text-muted-foreground">
                  Be the first to know when we launch by joining our waitlist.
                </p>
                <div className="mt-4">
                  <WaitlistDialog className="bg-qwalo-orange hover:bg-qwalo-orange/90 text-white w-full sm:w-auto" />
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-medium">Follow Us</h3>
                <p className="text-muted-foreground">
                  Stay connected with us on social media.
                </p>
                <div className="flex gap-4 mt-3">
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-qwalo-blue dark:hover:text-qwalo-orange transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-qwalo-blue dark:hover:text-qwalo-orange transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-qwalo-blue dark:hover:text-qwalo-orange transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in animate-delay-300">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6 shadow-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-medium mb-4">Send us a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px]"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-qwalo-blue hover:bg-qwalo-blue/90 text-white"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
