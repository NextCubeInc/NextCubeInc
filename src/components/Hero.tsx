import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-geometric-pattern opacity-30"></div>
      
      {/* Animated Cube */}
      <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 w-32 h-32 cube-glow cube-float"></div>
          
          {/* Main cube */}
          <div className="relative w-32 h-32 cube-float">
            <div className="w-full h-full bg-hero-gradient rounded-2xl transform rotate-12 shadow-glow"></div>
            
            {/* Cube faces for 3D effect */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="w-full h-full bg-gradient-to-r from-primary/40 to-transparent rounded-2xl transform -translate-x-2 -translate-y-2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent animate-fade-in">
          Construindo o futuro do SaaS em múltiplas dimensões
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
          A NextCube conecta tecnologia e inovação para escalar empresas digitais.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button variant="secondary" size="lg" className="group">
            Explorar Produtos
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            Assistir Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/30">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">3+</div>
            <div className="text-sm text-muted-foreground">Produtos SaaS</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success">24/7</div>
            <div className="text-sm text-muted-foreground">Suporte</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;