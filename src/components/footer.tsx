import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-gradient">Chandu Bommana</span>
            </h3>
            <p className="text-text-secondary">
              Junior Software Engineer passionate about creating amazing web experiences
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-text-muted text-sm">
              © {currentYear} Chandu Bommana. Made with{" "}
              <Heart className="h-4 w-4 inline text-red-500 fill-current" />{" "}
              using React & TypeScript
            </p>

            <div className="flex items-center gap-4">
              <p className="text-text-muted text-sm">
                Built with modern technologies
              </p>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollToTop}
                className="hover:bg-primary/10 hover:border-primary transition-smooth"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}