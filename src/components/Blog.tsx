import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "O Futuro do SaaS: Tendências para 2025",
      excerpt: "Explore as principais tendências que moldarão o mercado de software como serviço nos próximos anos.",
      date: "15 Jan 2025",
      category: "SaaS",
      readTime: "5 min",
    },
    {
      title: "Analytics Avançado: Como Dados Impulsionam Decisões",
      excerpt: "Descubra como transformar dados em insights acionáveis para acelerar o crescimento do seu negócio.",
      date: "12 Jan 2025",
      category: "Dados",
      readTime: "7 min",
    },
    {
      title: "Inovação Tecnológica: Construindo Produtos Escaláveis",
      excerpt: "Estratégias essenciais para desenvolver soluções que crescem junto com sua demanda de mercado.",
      date: "08 Jan 2025",
      category: "Inovação",
      readTime: "6 min",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "SaaS":
        return "text-primary bg-primary/10";
      case "Dados":
        return "text-secondary bg-secondary/10";
      case "Inovação":
        return "text-success bg-success/10";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  return (
    <section id="blog" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Insights & Conhecimento
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mantenha-se atualizado com as últimas tendências em SaaS, tecnologia e inovação empresarial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.title} 
              className="hover-lift group cursor-pointer border-border/50 bg-background"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {post.readTime} de leitura
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg">
            Ver Todos os Artigos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;