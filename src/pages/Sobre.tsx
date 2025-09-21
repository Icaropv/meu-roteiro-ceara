import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sun, Waves, Mountain, Palmtree, MapPin, Users, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const curiosidades = [
  {
    icon: <Sun className="h-6 w-6" />,
    titulo: "Sol o Ano Todo",
    descricao: "O Ceará tem mais de 300 dias de sol por ano, perfeito para suas férias!"
  },
  {
    icon: <Waves className="h-6 w-6" />,
    titulo: "573 km de Costa",
    descricao: "Uma das maiores e mais belas costas litorâneas do Brasil"
  },
  {
    icon: <Mountain className="h-6 w-6" />,
    titulo: "Chapada da Ibiapaba",
    descricao: "Serras e cachoeiras que contrastam com as praias paradisíacas"
  },
  {
    icon: <Palmtree className="h-6 w-6" />,
    titulo: "Cultura Rica",
    descricao: "Berço de grandes artistas, escritores e tradições nordestinas"
  }
];

const destinos = [
  {
    nome: "Fortaleza",
    descricao: "Capital moderna com vida noturna agitada",
    caracteristicas: ["Metrópole", "Vida Noturna", "Centro Cultural", "Praias Urbanas"]
  },
  {
    nome: "Jericoacoara",
    descricao: "Vila de pescadores que virou destino mundial",
    caracteristicas: ["Dunas", "Lagoas", "Pôr do Sol", "Kitesurf"]
  },
  {
    nome: "Canoa Quebrada",
    descricao: "Falésias coloridas e atmosfera boêmia",
    caracteristicas: ["Falésias", "Broadway", "Arte", "Buggy"]
  },
  {
    nome: "Cumbuco",
    descricao: "Paraíso dos esportes aquáticos",
    caracteristicas: ["Kitesurf", "Dunas", "Lagoas", "Aventura"]
  },
  {
    nome: "Icapuí",
    descricao: "Natureza preservada e praias selvagens",
    caracteristicas: ["Tartarugas", "Ecologia", "Natureza", "Tranquilidade"]
  }
];

const estatisticas = [
  { numero: "150+", label: "Destinos Mapeados" },
  { numero: "500+", label: "Restaurantes Catalogados" },
  { numero: "300+", label: "Passeios Disponíveis" },
  { numero: "50+", label: "Roteiros Personalizados" }
];

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-5xl font-bold mb-4  bg-clip-text text-teal-400">
              Ceará Turismo
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
              <Link to="/sobre" className="text-primary font-medium">
                Sobre
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Sobre o Ceará
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Terra do sol, das praias paradisíacas, da hospitalidade única e de uma cultura rica que encanta
            visitantes do mundo inteiro. Descubra por que o Ceará é considerado um dos destinos mais especiais do Brasil.
          </p>
        </div>
      </section>

      {/* Por que o Ceará */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Por que Escolher o Ceará?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O estado combina natureza exuberante, cultura autêntica e infraestrutura de qualidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curiosidades.map((item, index) => (
              <Card key={index} className="text-center group hover:shadow-tropical transition-smooth transform hover:-translate-y-2">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto group-hover:bg-primary/20 transition-smooth">
                    <div className="text-primary">
                      {item.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {item.titulo}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 gradient-ocean">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Nossa Plataforma em Números</h2>
            <p className="text-xl text-white/80">
              Dados que mostram nosso compromisso em oferecer o melhor do Ceará
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {estatisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.numero}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinos em Destaque */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Destinos em Destaque</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada destino do Ceará tem sua personalidade única e encantos especiais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinos.map((destino, index) => (
              <Card key={index} className="group hover:shadow-tropical transition-smooth transform hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                      {destino.nome}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {destino.descricao}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {destino.caracteristicas.map((carac, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
                        {carac}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* História e Cultura */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">História e Cultura</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  O Ceará é berço de uma cultura rica e diversificada, onde as tradições nordestinas
                  se misturam com influências indígenas, africanas e europeias, criando uma identidade única.
                </p>
                <p>
                  Terra de grandes nomes da literatura brasileira como José de Alencar e Rachel de Queiroz,
                  o estado também é conhecido por sua música vibrante, artesanato colorido e culinária saborosa.
                </p>
                <p>
                  A hospitalidade cearense é mundialmente reconhecida. Aqui, os visitantes são recebidos
                  não apenas como turistas, mas como amigos que fazem parte da família.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Hospitalidade</h3>
                <p className="text-sm text-muted-foreground">Povo acolhedor e caloroso</p>
              </Card>
              <Card className="p-6 text-center">
                <Star className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Tradição</h3>
                <p className="text-sm text-muted-foreground">Cultura preservada há séculos</p>
              </Card>
              <Card className="p-6 text-center">
                <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Autenticidade</h3>
                <p className="text-sm text-muted-foreground">Experiências genuínas</p>
              </Card>
              <Card className="p-6 text-center">
                <Palmtree className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Natureza</h3>
                <p className="text-sm text-muted-foreground">Paisagens de tirar o fôlego</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Melhor Época para Visitar */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Melhor Época para Visitar</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O Ceará pode ser visitado o ano todo, mas cada época tem suas particularidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-primary">Alta Temporada</CardTitle>
                <CardDescription>Dezembro a Março</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Período de férias e verão. Mais movimentado, preços mais altos,
                  mas com toda a infraestrutura funcionando.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-primary">Melhor Período</CardTitle>
                <CardDescription>Julho a Novembro</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Menos chuva, ventos mais fortes (ideal para kitesurf),
                  preços mais baixos e menos multidões.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-primary">Período Chuvoso</CardTitle>
                <CardDescription>Abril a Junho</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Chuvas esporádicas, paisagem mais verde,
                  preços baixos e destinos menos movimentados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 gradient-sunset">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Descobrir o Ceará?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Comece a planejar sua viagem dos sonhos. O paraíso está esperando por você!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/roteiros" className="inline-block">
              <div className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-smooth">
                Ver Roteiros
              </div>
            </Link>
            <Link to="/passeios" className="inline-block">
              <div className="bg-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-smooth border border-white/30">
                Explorar Passeios
              </div>
            </Link>
          </div>
        </div>
      </section>
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4  bg-clip-text text-cyan-400">
                Ceará Turismo
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

export default Sobre;