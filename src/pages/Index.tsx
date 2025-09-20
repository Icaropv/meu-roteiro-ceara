import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Utensils, Camera, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ceara.jpg";

const cidades = [
  { id: "fortaleza", nome: "Fortaleza", descricao: "Capital vibrante com praias urbanas" },
  { id: "jericoacoara", nome: "Jericoacoara", descricao: "Paraíso das dunas e lagoas" },
  { id: "canoa-quebrada", nome: "Canoa Quebrada", descricao: "Falésias coloridas e pôr do sol" },
  { id: "cumbuco", nome: "Cumbuco", descricao: "Aventura em dunas e lagoas" },
  { id: "icapui", nome: "Icapuí", descricao: "Praias selvagens e intocadas" },
];

const destaques = [
  { 
    icon: <Utensils className="h-6 w-6" />, 
    titulo: "Gastronomia", 
    descricao: "Sabores únicos do mar e sertão",
    link: "/restaurantes"
  },
  { 
    icon: <Camera className="h-6 w-6" />, 
    titulo: "Passeios", 
    descricao: "Aventuras inesquecíveis",
    link: "/passeios"
  },
  { 
    icon: <Star className="h-6 w-6" />, 
    titulo: "Roteiros", 
    descricao: "Experiências completas",
    link: "/roteiros"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold gradient-ocean bg-clip-text text-transparent">
              O Mapa do Viajante
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/roteiros" className="text-foreground hover:text-primary transition-smooth">
                Roteiros
              </Link>
              <Link to="/restaurantes" className="text-foreground hover:text-primary transition-smooth">
                Restaurantes
              </Link>
              <Link to="/passeios" className="text-foreground hover:text-primary transition-smooth">
                Passeios
              </Link>
              <Link to="/sobre" className="text-foreground hover:text-primary transition-smooth">
                Sobre
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Descubra o{" "}
            <span className="gradient-hero bg-clip-text text-transparent">
              Ceará
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Escolha sua cidade e encontre os melhores roteiros, restaurantes e passeios
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-ocean">
              <MapPin className="mr-2 h-5 w-5" />
              Explorar Cidades
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Ver Roteiros
            </Button>
          </div>
        </div>
      </section>

      {/* Cidades Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Escolha Sua Cidade</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada destino do Ceará tem sua personalidade única. Descubra qual combina com você.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cidades.map((cidade, index) => (
              <Card 
                key={cidade.id} 
                className="group hover:shadow-tropical transition-smooth cursor-pointer transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-smooth">
                    {cidade.nome}
                  </CardTitle>
                  <CardDescription>{cidade.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={`/roteiros?cidade=${cidade.id}`}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                      Ver Roteiros
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destaques Section */}
      <section className="py-20 gradient-ocean">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">O Que Te Espera</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Experiências autênticas e inesquecíveis em cada canto do Ceará
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {destaques.map((destaque, index) => (
              <Link 
                key={index}
                to={destaque.link}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-smooth transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6 group-hover:bg-white/30 transition-smooth">
                  <div className="text-white">
                    {destaque.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{destaque.titulo}</h3>
                <p className="text-white/80">{destaque.descricao}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Sua Aventura?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Comece planejando sua viagem dos sonhos pelo Ceará agora mesmo
          </p>
          <Button size="lg" className="gradient-sunset text-white shadow-tropical hover:shadow-ocean">
            <MapPin className="mr-2 h-5 w-5" />
            Começar Planejamento
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-ocean bg-clip-text text-transparent">
                O Mapa do Viajante
              </h3>
              <p className="text-muted-foreground">
                Seu guia completo para descobrir as maravilhas do Ceará.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Destinos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Fortaleza</li>
                <li>Jericoacoara</li>
                <li>Canoa Quebrada</li>
                <li>Cumbuco</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Experiências</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Restaurantes</li>
                <li>Passeios</li>
                <li>Roteiros</li>
                <li>Cultura Local</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <p className="text-sm text-muted-foreground">
                Descubra o melhor do Ceará conosco
              </p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Ceará Turismo. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;