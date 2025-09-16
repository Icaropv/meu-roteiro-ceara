import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Star, Utensils, DollarSign, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const restaurantes = {
  fortaleza: [
    {
      id: 1,
      nome: "Coco Bambu",
      tipo: "Frutos do Mar",
      avaliacao: 4.8,
      preco: "R$$$",
      especialidade: "Camarão internacional e pratos regionais",
      endereco: "Meireles, Fortaleza",
      telefone: "(85) 3466-8350",
      horario: "11h às 24h",
      descricao: "Famoso pelos camarões gigantes e ambiente elegante",
      pratos: ["Camarão Internacional", "Casquinha de Caranguejo", "Peixe Grelhado"],
      tags: ["Frutos do Mar", "Elegante", "Familiar"]
    },
    {
      id: 2,
      nome: "Colher de Pau",
      tipo: "Regional",
      avaliacao: 4.6,
      preco: "R$$",
      especialidade: "Culinária regional cearense",
      endereco: "Varjota, Fortaleza",
      telefone: "(85) 3267-3354",
      horario: "11h às 22h",
      descricao: "Autêntica comida cearense em ambiente acolhedor",
      pratos: ["Baião de Dois", "Carne de Sol", "Buchada de Bode"],
      tags: ["Regional", "Tradicional", "Casual"]
    },
    {
      id: 3,
      nome: "Santa Grelha",
      tipo: "Churrascaria",
      avaliacao: 4.7,
      preco: "R$$$",
      especialidade: "Carnes nobres e buffet completo",
      endereco: "Meireles, Fortaleza",
      telefone: "(85) 3242-7999",
      horario: "17h às 24h",
      descricao: "Churrascaria premium com cortes especiais",
      pratos: ["Picanha Especial", "Cordeiro", "Linguiça Artesanal"],
      tags: ["Churrasco", "Premium", "Rodízio"]
    }
  ],
  jericoacoara: [
    {
      id: 4,
      nome: "Tamarindo",
      tipo: "Internacional",
      avaliacao: 4.8,
      preco: "R$$$",
      especialidade: "Culinária internacional com toque local",
      endereco: "Centro, Jericoacoara",
      telefone: "(88) 3669-2027",
      horario: "18h às 24h",
      descricao: "Restaurante sofisticado com vista para o mar",
      pratos: ["Polvo Grelhado", "Risotto de Camarão", "Peixe do Dia"],
      tags: ["Internacional", "Romântico", "Vista Mar"]
    },
    {
      id: 5,
      nome: "Pizzaria Fornalha",
      tipo: "Pizzaria",
      avaliacao: 4.5,
      preco: "R$$",
      especialidade: "Pizzas artesanais em forno a lenha",
      endereco: "Rua Principal, Jericoacoara",
      telefone: "(88) 3669-2088",
      horario: "18h às 24h",
      descricao: "Pizzas saborosas com ingredientes frescos",
      pratos: ["Pizza Camarão", "Pizza Margherita", "Pizza Nordestina"],
      tags: ["Pizza", "Casual", "Forno a Lenha"]
    }
  ],
  "canoa-quebrada": [
    {
      id: 6,
      nome: "Chico do Caranguejo",
      tipo: "Frutos do Mar",
      avaliacao: 4.6,
      preco: "R$$",
      especialidade: "Caranguejo e frutos do mar locais",
      endereco: "Broadway, Canoa Quebrada",
      telefone: "(85) 3421-7171",
      horario: "11h às 23h",
      descricao: "Especialista em caranguejo com tempero especial",
      pratos: ["Caranguejo Especial", "Moqueca de Peixe", "Caldeirada"],
      tags: ["Caranguejo", "Local", "Típico"]
    },
    {
      id: 7,
      nome: "Restaurante Dunas",
      tipo: "Regional",
      avaliacao: 4.4,
      preco: "R$",
      especialidade: "Pratos regionais e caseiros",
      endereco: "Centro, Canoa Quebrada",
      telefone: "(85) 3421-7200",
      horario: "10h às 22h",
      descricao: "Comida caseira com sabor autêntico",
      pratos: ["Peixe Assado", "Macaxeira com Carne de Sol", "Farofa de Banana"],
      tags: ["Caseiro", "Barato", "Regional"]
    }
  ],
  cumbuco: [
    {
      id: 8,
      nome: "Restaurante Duro Beach",
      tipo: "Frutos do Mar",
      avaliacao: 4.5,
      preco: "R$$",
      especialidade: "Frutos do mar na praia",
      endereco: "Praia de Cumbuco",
      telefone: "(85) 3318-7500",
      horario: "9h às 18h",
      descricao: "Pé na areia com vista privilegiada",
      pratos: ["Lagosta Grelhada", "Peixe na Telha", "Bobó de Camarão"],
      tags: ["Pé na Areia", "Vista Mar", "Lagosta"]
    }
  ],
  icapui: [
    {
      id: 9,
      nome: "Marisqueira do Porto",
      tipo: "Frutos do Mar",
      avaliacao: 4.3,
      preco: "R$",
      especialidade: "Frutos do mar frescos e baratos",
      endereco: "Porto de Icapuí",
      telefone: "(85) 3421-8100",
      horario: "10h às 20h",
      descricao: "Frutos do mar direto do barco dos pescadores",
      pratos: ["Peixe Frito", "Caldinho de Sururu", "Casquinha de Siri"],
      tags: ["Barato", "Fresh", "Simples"]
    }
  ]
};

const Restaurantes = () => {
  const [cidadeSelecionada, setCidadeSelecionada] = useState<string>("todos");
  const [tipoSelecionado, setTipoSelecionado] = useState<string>("todos");

  const obterRestaurantes = () => {
    let todos = Object.values(restaurantes).flat();
    
    if (cidadeSelecionada !== "todos") {
      todos = restaurantes[cidadeSelecionada as keyof typeof restaurantes] || [];
    }
    
    if (tipoSelecionado !== "todos") {
      todos = todos.filter(r => r.tipo === tipoSelecionado);
    }
    
    return todos;
  };

  const cidades = [
    { id: "todos", nome: "Todas as Cidades" },
    { id: "fortaleza", nome: "Fortaleza" },
    { id: "jericoacoara", nome: "Jericoacoara" },
    { id: "canoa-quebrada", nome: "Canoa Quebrada" },
    { id: "cumbuco", nome: "Cumbuco" },
    { id: "icapui", nome: "Icapuí" },
  ];

  const tipos = [
    { id: "todos", nome: "Todos os Tipos" },
    { id: "Frutos do Mar", nome: "Frutos do Mar" },
    { id: "Regional", nome: "Regional" },
    { id: "Internacional", nome: "Internacional" },
    { id: "Churrascaria", nome: "Churrascaria" },
    { id: "Pizzaria", nome: "Pizzaria" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold gradient-ocean bg-clip-text text-transparent">
              Ceará Turismo
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/roteiros" className="text-foreground hover:text-primary transition-smooth">
                Roteiros
              </Link>
              <Link to="/restaurantes" className="text-primary font-medium">
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
      <section className="gradient-sunset py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Restaurantes do Ceará
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Saboreie a autêntica gastronomia cearense nos melhores restaurantes de cada destino
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center gap-2">
              <Utensils className="h-5 w-5 text-primary" />
              <span className="font-medium">Filtrar:</span>
            </div>
            <Select value={cidadeSelecionada} onValueChange={setCidadeSelecionada}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Cidade" />
              </SelectTrigger>
              <SelectContent>
                {cidades.map((cidade) => (
                  <SelectItem key={cidade.id} value={cidade.id}>
                    {cidade.nome}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={tipoSelecionado} onValueChange={setTipoSelecionado}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Tipo de Culinária" />
              </SelectTrigger>
              <SelectContent>
                {tipos.map((tipo) => (
                  <SelectItem key={tipo.id} value={tipo.id}>
                    {tipo.nome}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Restaurantes Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {obterRestaurantes().map((restaurante) => (
              <Card key={restaurante.id} className="group hover:shadow-tropical transition-smooth transform hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1 group-hover:text-primary transition-smooth">
                        {restaurante.nome}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium text-primary">
                        {restaurante.tipo}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-primary">
                      <Star className="h-4 w-4 fill-current" />
                      {restaurante.avaliacao}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{restaurante.descricao}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Especialidade */}
                  <div>
                    <span className="font-medium text-sm">Especialidade: </span>
                    <span className="text-sm text-muted-foreground">{restaurante.especialidade}</span>
                  </div>

                  {/* Preço e Localização */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-primary">
                      <DollarSign className="h-4 w-4" />
                      <span className="font-bold">{restaurante.preco}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{restaurante.endereco}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {restaurante.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-secondary/20 text-secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Pratos Principais */}
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Pratos principais:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {restaurante.pratos.map((prato, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {prato}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Informações de Contato */}
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div className="flex items-center gap-2">
                      <Phone className="h-3 w-3" />
                      {restaurante.telefone}
                    </div>
                    <div>
                      <span className="font-medium">Horário:</span> {restaurante.horario}
                    </div>
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Ver Mais Detalhes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {obterRestaurantes().length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nenhum restaurante encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Restaurantes;