import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const links = {
    produtos: [
      { name: "Prisma", href: "https://prisma.nextcubeinc.com" },
      { name: "ConnectHub", href: "https://connecthub.nextcubeinc.com" },
      { name: "NextCore", href: "https://nextcore.nextcubeinc.com" },
    ],
    empresa: [
      { name: "Sobre", href: "#sobre" },
      { name: "Blog", href: "#blog" },
      { name: "Carreiras", href: "#" },
      { name: "Contato", href: "#contato" },
    ],
    legal: [
      { name: "Política de Privacidade", href: "#" },
      { name: "Termos de Serviço", href: "#" },
      { name: "Cookies", href: "#" },
    ],
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/public/favicon.ico" alt="" className="max-h-12 min-h-8"/>
              <span className="text-xl font-bold">NextCube</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Construindo o futuro do SaaS em múltiplas dimensões. 
              Conectamos tecnologia e inovação para escalar empresas digitais.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-muted/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links sections */}
          <div>
            <h3 className="font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              {links.produtos.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {links.empresa.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 NextCube Inc. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Status do Sistema
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Documentação
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              API
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;