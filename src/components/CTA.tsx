import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-2xl transform rotate-12"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/5 rounded-xl transform -rotate-12"></div>
        <div className="absolute bottom-16 left-1/3 w-24 h-24 border border-white/10 rounded-lg transform rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/5 rounded-2xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para dar o próximo passo com a NextCube?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Transforme sua visão em realidade com nossas soluções SaaS integradas. 
            Vamos construir o futuro do seu negócio juntos.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="group bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all"
            >
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary transition-all"
            >
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