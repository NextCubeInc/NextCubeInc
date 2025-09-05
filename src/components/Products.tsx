import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Link, Cog, ArrowUpRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "Prisma",
      url: "prisma.nextcubeinc.com",
      description: "Plataforma completa de identidade digital e analytics avançado para otimizar sua presença online.",
      icon: BarChart3,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      name: "ConnectHub",
      url: "connecthub.nextcubeinc.com", 
      description: "Central de integrações e comunicação para conectar todos os seus sistemas e equipes.",
      icon: Link,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      name: "NextCore",
      url: "nextcore.nextcubeinc.com",
      description: "Núcleo de gestão e APIs robustas para escalar seus produtos e serviços digitais.",
      icon: Cog,
      color: "text-success", 
      bgColor: "bg-success/10",
    },
  ];

  return (
    <section id="produtos" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nosso Ecossistema de Produtos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções integradas que crescem junto com seu negócio, oferecendo escalabilidade e inovação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.name} 
              className="hover-lift group cursor-pointer border-border/50 bg-background"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${product.bgColor}`}>
                    <product.icon className={`h-6 w-6 ${product.color}`} />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {product.url}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;