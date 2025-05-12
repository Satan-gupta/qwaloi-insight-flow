
import { WaitlistDialog } from "./waitlist-dialog";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-slate-950 py-12 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-qwalo-blue to-qwalo-orange bg-clip-text text-transparent mb-4">Qwalo.ai</h3>
            <p className="text-muted-foreground max-w-md">
              Revolutionizing qualitative research with the power of artificial intelligence.
            </p>
          </div>
          <WaitlistDialog className="bg-qwalo-orange hover:bg-qwalo-orange/90 text-white" />
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#product" className="text-muted-foreground hover:text-foreground transition-colors">Product</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">© {currentYear} Qwalo.ai. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
