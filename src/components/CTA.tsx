import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import Orb from './ui/Orb';

const CTA = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Fundo Animado*/}
      <div className='absolute inset-0'>
        <Orb
          hoverIntensity={2}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para dar o próximo passo?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Transforme sua visão em realidade com nossas soluções integradas. 
            Vamos construir o futuro juntos.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="backdrop-blur-md bg-background/40 rounded-[200px] border-white/30 border-[1px] " size='lg'>
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button className="backdrop-blur-md bg-background/40 rounded-[200px] border-white/30 border-[1px] " size='lg'>
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale com nosso time
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-white">15min</div>
                <div className="text-sm text-white/70">Setup inicial</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">0%</div>
                <div className="text-sm text-white/70">Taxa de setup</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">30 dias</div>
                <div className="text-sm text-white/70">Teste grátis</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/70">Suporte premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;