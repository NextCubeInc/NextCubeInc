import DarkVeil from './ui/DarkVeil';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TextType from './ui/TextType';

const HeroCopy = () => {
  return (
    <section className="relative w-100% min-h-screen">
      {/* Fundo Animado*/}
      <div className='absolute inset-0 min-h-screen'>
      <DarkVeil resolutionScale={1} speed={2}/>
      </div> 
      <div className='min-h-[10rem] md:min-h-[18rem]'/>
      {/* Front Texts*/}
      <div className="relative flex items-center justify-center overflow-hidden">

        {/* Animated Cube */}
        <div className="absolute right-1/3 top-[84%] transform -translate-y-1/2 md:right-1/4 sm:top-1/2 ">
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

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <div className='relative block min-h-[10.5rem] md:min-h-[13rem]'>
            <TextType
            className="text-[2rem] md:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent animate-fade-in"
              text={
                ["Impulsionando todo o futuro em múltiplas dimensões",
                "Inovando o futuro da tecnologia em múltiplas dimensões",
                "Explorando o futuro da tecnologia em múltiplas dimensões",
                "Transformando o futuro do mundo em múltiplas dimensões"]
              }
              pauseDuration={2500}
              deletingSpeed={10}
              cursorCharacter="_"
            />
          </div>
          
        
        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto animate-slide-up">
          A NextCube conecta tecnologia e inovação para escalar empresas digitais.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">  
          <Button className="backdrop-blur-md bg-background/40 rounded-[200px] border-white/30 border-[1px] " size='lg'>
            Explorar Produtos
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
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
          <div className='min-h-[15em] sm:min-h-0'/>
        </div>
      </div>
      </div>

    </section>
  );
}

export default HeroCopy;
