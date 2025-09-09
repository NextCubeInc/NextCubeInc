import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Zap } from "lucide-react";
import LogoLoop from './ui/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiShadcnui, SiSupabase } from 'react-icons/si';

const About = () => {

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiShadcnui />, title: "Tailwind CSS", href: "https://ui.shadcn.com" },
    { node: <SiSupabase />, title: "Tailwind CSS", href: "https://supabase.com" },
  ];

  const values = [
    {
      icon: Zap,
      title: "Inovação",
      description: "Sempre na vanguarda da tecnologia, criando soluções que antecipam o futuro.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Target,
      title: "Confiabilidade",
      description: "Infraestrutura robusta e segura para garantir a continuidade do seu negócio.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Eye,
      title: "Escalabilidade",
      description: "Produtos que crescem com você, adaptando-se às necessidades do seu mercado.",
      color: "text-success",
      bgColor: "bg-success/10",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Sobre a NextCube
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Somos uma holding especializada em desenvolver e operar produtos SaaS de alta performance. 
                Nossa missão é acelerar a transformação digital de empresas através de soluções integradas e escaláveis.
              </p>
              <p>
                Com expertise em múltiplas dimensões do ecossistema digital, construímos plataformas que 
                conectam dados, pessoas e processos de forma inteligente e eficiente.
              </p>
            </div>
            
            {/* Mission & Vision */}
            <div className="mt-12 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Nossa Missão</h3>
                <p className="text-muted-foreground">
                  Empoderar empresas com tecnologia de ponta, oferecendo soluções SaaS que impulsionam 
                  o crescimento e a inovação sustentável.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-secondary">Nossa Visão</h3>
                <p className="text-muted-foreground">
                  Ser referência global em soluções SaaS integradas, criando o futuro da tecnologia 
                  empresarial em múltiplas dimensões.
                </p>
              </div>
            </div>
          </div>
          {/* Right side - Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Nossos Valores</h3>
            {values.map((value, index) => (
                <Card
                  key={value.title} 
                  className="hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl ${value.bgColor}`}>
                          <value.icon className={`h-6 w-6 ${value.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                          <p className="text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>  
                </Card>
            ))}
          </div>
        </div>
        {/*PARCEIRROS*/}
        <div className="text-center">
        <h2 className="text-4xl font-bold mt-16">Nossas Tecnologias</h2>
        </div>
        <div className="mt-20">
        <LogoLoop
          logos={techLogos}
          speed={90}
          direction="right"
          logoHeight={80}
          gap={70}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#1c1c24"
          ariaLabel="Technology partners"
        />
        </div>
      </div>
    </section>
  );
};

export default About;