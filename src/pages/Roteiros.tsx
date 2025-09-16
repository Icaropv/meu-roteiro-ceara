import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, MapPin, Star, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const roteiros = {
  fortaleza: [
    {
      id: 1,
      titulo: "Fortaleza Completa - 3 Dias",
      duracao: "3 dias",
      dificuldade: "Fácil",
      avaliacao: 4.8,
      preco: "Gratuito",
      descricao: "Explore o melhor da capital cearense em 3 dias inesquecíveis",
      atividades: [
        "Centro Dragão do Mar",
        "Praia de Iracema",
        "Mercado Central",
        "Beach Park (opcional)",
        "Centro Histórico"
      ],
      tags: ["Cultura", "Praia", "História", "Gastronomia"]
    },
    {
      id: 2,
      titulo: "Praias de Fortaleza",
      duracao: "2 dias",
      dificuldade: "Fácil",
      avaliacao: 4.6,
      preco: "R$ 150",
      descricao: "Tour pelas melhores praias da região metropolitana",
      atividades: [
        "Praia do Futuro",
        "Cumbuco",
        "Praia das Fontes",
        "Morro Branco",
        "Águas Belas"
      ],
      tags: ["Praia", "Natureza", "Aventura"]
    }
  ],
  jericoacoara: [
    {
      id: 3,
      titulo: "Jeri Clássico - 4 Dias",
      duracao: "4 dias",
      dificuldade: "Moderada",
      avaliacao: 4.9,
      preco: "R$ 300",
      descricao: "A experiência completa em Jericoacoara",
      atividades: [
        "Duna do Pôr do Sol",
        "Lagoa Azul",
        "Lagoa do Paraíso",
        "Pedra Furada",
        "Árvore da Preguiça"
      ],
      tags: ["Praia", "Lagoas", "Pôr do Sol", "Natureza"]
    },
    {
      id: 4,
      titulo: "Aventura nas Lagoas",
      duracao: "2 dias",
      dificuldade: "Moderada",
      avaliacao: 4.7,
      preco: "R$ 200",
      descricao: "Explore as lagoas mais bonitas da região",
      atividades: [
        "Lagoa Azul",
        "Lagoa do Paraíso",
        "Lagoa da Tatajuba",
        "Passeio de Buggy",
        "Stand Up Paddle"
      ],
      tags: ["Lagoas", "Aventura", "Esportes"]
    }
  ],
  "canoa-quebrada": [
    {
      id: 5,
      titulo: "Canoa Quebrada Essencial",
      duracao: "2 dias",
      dificuldade: "Fácil",
      avaliacao: 4.7,
      preco: "R$ 120",
      descricao: "Descubra as falésias coloridas e cultura local",
      atividades: [
        "Falésias Coloridas",
        "Broadway (rua principal)",
        "Praia de Canoa Quebrada",
        "Passeio de Buggy",
        "Artesanato Local"
      ],
      tags: ["Praia", "Cultura", "Artesanato", "Falésias"]
    }
  ],
  cumbuco: [
    {
      id: 6,
      titulo: "Cumbuco Aventura",
      duracao: "1 dia",
      dificuldade: "Moderada",
      avaliacao: 4.5,
      preco: "R$ 180",
      descricao: "Adrenalina nas dunas e lagoas de Cumbuco",
      atividades: [
        "Passeio de Buggy",
        "Esqui Bunda",
        "Lagoa de Cumbuco",
        "Kitesurf",
        "Praia de Cumbuco"
      ],
      tags: ["Aventura", "Esportes", "Dunas", "Lagoas"]
    }
  ],
  icapui: [
    {
      id: 7,
      titulo: "Icapuí Selvagem",
      duracao: "2 dias",
      dificuldade: "Moderada",
      avaliacao: 4.6,
      preco: "R$ 100",
      descricao: "Praias desertas e natureza preservada",
      atividades: [
        "Praia de Redonda",
        "Praia de Peroba",
        "Ponta Grossa",
        "Observação de Tartarugas",
        "Trilhas Ecológicas"
      ],
      tags: ["Natureza", "Praia", "Ecologia", "Vida Selvagem"]
    }
  ]
};

const Roteiros = () => {
  const [cidadeSelecionada, setCidadeSelecionada] = useState<string>("todos");

  const obterRoteiros = () => {
    if (cidadeSelecionada === "todos") {
      return Object.values(roteiros).flat();
    }
    return roteiros[cidadeSelecionada as keyof typeof roteiros] || [];
  };

  const cidades = [
    { id: "todos", nome: "Todas as Cidades" },
    { id: "fortaleza", nome: "Fortaleza" },
    { id: "jericoacoara", nome: "Jericoacoara" },
    { id: "canoa-quebrada", nome: "Canoa Quebrada" },
    { id: "cumbuco", nome: "Cumbuco" },
    { id: "icapui", nome: "Icapuí" },
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
              <Link to="/roteiros" className="text-primary font-medium">
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
      <section className="gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Roteiros do Ceará
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Descubra roteiros personalizados para cada destino e aproveite ao máximo sua viagem
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium">Filtrar por cidade:</span>
            </div>
            <Select value={cidadeSelecionada} onValueChange={setCidadeSelecionada}>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Selecione uma cidade" />
              </SelectTrigger>
              <SelectContent>
                {cidades.map((cidade) => (
                  <SelectItem key={cidade.id} value={cidade.id}>
                    {cidade.nome}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Roteiros Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {obterRoteiros().map((roteiro) => (
              <Card key={roteiro.id} className="group hover:shadow-tropical transition-smooth transform hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-smooth">
                        {roteiro.titulo}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {roteiro.descricao}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-primary">
                      <Star className="h-4 w-4 fill-current" />
                      {roteiro.avaliacao}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Informações básicas */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {roteiro.duracao}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {roteiro.dificuldade}
                    </div>
                  </div>

                  {/* Preço */}
                  <div className="text-2xl font-bold text-primary">
                    {roteiro.preco}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {roteiro.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Atividades principais */}
                  <div>
                    <h4 className="font-medium mb-2">Principais atividades:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {roteiro.atividades.slice(0, 3).map((atividade, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {atividade}
                        </li>
                      ))}
                      {roteiro.atividades.length > 3 && (
                        <li className="text-primary text-xs">
                          + {roteiro.atividades.length - 3} outras atividades
                        </li>
                      )}
                    </ul>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Ver Detalhes do Roteiro
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {obterRoteiros().length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nenhum roteiro encontrado para esta cidade.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Roteiros;