
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface WaitlistDialogProps {
  trigger?: React.ReactNode;
  className?: string;
  buttonText?: string;
}

export function WaitlistDialog({ trigger, className, buttonText = "Join the Waitlist" }: WaitlistDialogProps) {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to the waitlist. We'll notify you on launch.",
      });
      setEmail("");
      setOpen(false);
      setLoading(false);
    }, 1000);
  };

  const defaultTrigger = (
    <Button className={className}>
      {buttonText}
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border border-gray-200 dark:border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl">Join the Waitlist</DialogTitle>
          <DialogDescription>
            Be the first to know when Qwalo.ai launches!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
          <DialogFooter>
            <Button 
              type="submit" 
              className="w-full bg-qwalo-orange hover:bg-qwalo-orange/90 text-white"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Join Waitlist"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
