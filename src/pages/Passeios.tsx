import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Star, Clock, Users, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const passeios = {
  fortaleza: [
    {
      id: 1,
      nome: "City Tour Fortaleza",
      tipo: "Cultural",
      duracao: "8 horas",
      grupo: "2-15 pessoas",
      avaliacao: 4.7,
      preco: "R$ 80",
      descricao: "Conheça os principais pontos turísticos da capital cearense",
      inclusos: ["Transporte", "Guia", "Entrada museus"],
      roteiro: [
        "Centro Dragão do Mar",
        "Mercado Central", 
        "Catedral Metropolitana",
        "Theatro José de Alencar",
        "Centro Histórico"
      ],
      tags: ["História", "Cultura", "Museus", "Arquitetura"]
    },
    {
      id: 2,
      nome: "Beach Park",
      tipo: "Diversão",
      duracao: "Dia inteiro",
      grupo: "Familiar",
      avaliacao: 4.8,
      preco: "R$ 150",
      descricao: "O maior parque aquático da América Latina",
      inclusos: ["Transporte", "Entrada do parque"],
      roteiro: [
        "Toboáguas radicais",
        "Piscinas temáticas",
        "Área infantil",
        "Restaurantes",
        "Praia privativa"
      ],
      tags: ["Família", "Diversão", "Água", "Adrenalina"]
    },
    {
      id: 3,
      nome: "Passeio de Buggy - Praias do Litoral Leste",
      tipo: "Aventura",
      duracao: "6 horas",
      grupo: "2-4 pessoas",
      avaliacao: 4.9,
      preco: "R$ 200",
      descricao: "Explore as praias paradisíacas do litoral leste cearense",
      inclusos: ["Buggy", "Motorista/guia", "Paradas para fotos"],
      roteiro: [
        "Praia das Fontes",
        "Morro Branco",
        "Praia de Águas Belas",
        "Falésias coloridas",
        "Artesanato local"
      ],
      tags: ["Aventura", "Praia", "Falésias", "Fotografia"]
    }
  ],
  jericoacoara: [
    {
      id: 4,
      nome: "Pôr do Sol na Duna",
      tipo: "Contemplativo",
      duracao: "3 horas",
      grupo: "Ilimitado",
      avaliacao: 4.9,
      preco: "R$ 25",
      descricao: "O mais famoso pôr do sol do Brasil",
      inclusos: ["Guia local"],
      roteiro: [
        "Caminhada até a duna",
        "Posicionamento para o pôr do sol",
        "Contemplação",
        "Fotos incríveis",
        "Descida com cuidado"
      ],
      tags: ["Pôr do Sol", "Romântico", "Fotografia", "Natureza"]
    },
    {
      id: 5,
      nome: "Tour das Lagoas",
      tipo: "Natureza",
      duracao: "8 horas",
      grupo: "4-12 pessoas",
      avaliacao: 4.8,
      preco: "R$ 120",
      descricao: "Visite as lagoas mais bonitas da região",
      inclusos: ["Transporte 4x4", "Guia", "Paradas para banho"],
      roteiro: [
        "Lagoa Azul",
        "Lagoa do Paraíso",
        "Árvore da Preguiça",
        "Lagoa da Tatajuba",
        "Almoço típico"
      ],
      tags: ["Lagoas", "Natureza", "Banho", "Relaxamento"]
    },
    {
      id: 6,
      nome: "Kitesurf - Aula para Iniciantes",
      tipo: "Esporte",
      duracao: "3 horas",
      grupo: "1-4 pessoas",
      avaliacao: 4.6,
      preco: "R$ 180",
      descricao: "Aprenda kitesurf com instrutores certificados",
      inclusos: ["Equipamento completo", "Instrutor", "Seguro"],
      roteiro: [
        "Teoria básica",
        "Manuseio da pipa na areia",
        "Primeiros passos na água",
        "Prática supervisionada",
        "Dicas de segurança"
      ],
      tags: ["Esporte", "Adrenalina", "Água", "Aprendizado"]
    }
  ],
  "canoa-quebrada": [
    {
      id: 7,
      nome: "Passeio pelas Falésias",
      tipo: "Contemplativo",
      duracao: "4 horas",
      grupo: "2-20 pessoas",
      avaliacao: 4.7,
      preco: "R$ 60",
      descricao: "Conheça as mundialmente famosas falésias coloridas",
      inclusos: ["Guia local", "Paradas fotográficas"],
      roteiro: [
        "Broadway (rua principal)",
        "Mirante das falésias",
        "Praia principal",
        "Falésias coloridas",
        "Artesanato local"
      ],
      tags: ["Falésias", "Fotografia", "Geologia", "Artesanato"]
    },
    {
      id: 8,
      nome: "Buggy Adventure",
      tipo: "Aventura",
      duracao: "5 horas",
      grupo: "2-4 pessoas",
      avaliacao: 4.5,
      preco: "R$ 160",
      descricao: "Aventura radical pelas dunas e praias desertas",
      inclusos: ["Buggy", "Motorista", "Combustível"],
      roteiro: [
        "Dunas móveis",
        "Praias desertas",
        "Lagoas naturais",
        "Pesca artesanal",
        "Parada para lanche"
      ],
      tags: ["Buggy", "Dunas", "Aventura", "Praias Selvagens"]
    }
  ],
  cumbuco: [
    {
      id: 9,
      nome: "Esqui Bunda nas Dunas",
      tipo: "Aventura",
      duracao: "4 horas",
      grupo: "2-8 pessoas",
      avaliacao: 4.8,
      preco: "R$ 90",
      descricao: "Diversão garantida descendo as dunas de Cumbuco",
      inclusos: ["Prancha", "Instruções", "Segurança"],
      roteiro: [
        "Passeio de buggy até as dunas",
        "Instruções de segurança",
        "Descidas nas dunas",
        "Banho na lagoa",
        "Tempo livre na praia"
      ],
      tags: ["Esqui Bunda", "Dunas", "Diversão", "Lagoa"]
    },
    {
      id: 10,
      nome: "Kitesurf - Curso Completo",
      tipo: "Esporte",
      duracao: "3 dias",
      grupo: "1-6 pessoas",
      avaliacao: 4.9,
      preco: "R$ 450",
      descricao: "Aprenda kitesurf do básico ao intermediário",
      inclusos: ["Equipamento", "Instrutor IKO", "Certificado"],
      roteiro: [
        "Dia 1: Teoria e controle da pipa",
        "Dia 2: Body drag e water start", 
        "Dia 3: Primeiras navegadas",
        "Prática supervisionada",
        "Certificado internacional"
      ],
      tags: ["Kitesurf", "Curso", "Certificação", "3 Dias"]
    }
  ],
  icapui: [
    {
      id: 11,
      nome: "Observação de Tartarugas",
      tipo: "Ecológico",
      duracao: "6 horas",
      grupo: "4-12 pessoas",
      avaliacao: 4.6,
      preco: "R$ 100",
      descricao: "Experimente a emoção de ver tartarugas marinhas",
      inclusos: ["Guia especializado", "Equipamentos", "Lanche"],
      roteiro: [
        "Projeto TAMAR",
        "Praia de desova",
        "Observação noturna",
        "Educação ambiental",
        "Certificado de participação"
      ],
      tags: ["Tartarugas", "Ecologia", "Noturno", "TAMAR"]
    },
    {
      id: 12,
      nome: "Trilha Ecológica",
      tipo: "Ecoturismo",
      duracao: "5 horas",
      grupo: "2-15 pessoas",
      avaliacao: 4.4,
      preco: "R$ 70",
      descricao: "Conheça a natureza preservada de Icapuí",
      inclusos: ["Guia", "Água", "Lanche"],
      roteiro: [
        "Mata Atlântica preservada",
        "Observação de aves",
        "Nascentes naturais",
        "Praia selvagem",
        "Fotografia da natureza"
      ],
      tags: ["Trilha", "Natureza", "Aves", "Preservação"]
    }
  ]
};

const Passeios = () => {
  const [cidadeSelecionada, setCidadeSelecionada] = useState<string>("todos");
  const [tipoSelecionado, setTipoSelecionado] = useState<string>("todos");

  const obterPasseios = () => {
    let todos = Object.values(passeios).flat();
    
    if (cidadeSelecionada !== "todos") {
      todos = passeios[cidadeSelecionada as keyof typeof passeios] || [];
    }
    
    if (tipoSelecionado !== "todos") {
      todos = todos.filter(p => p.tipo === tipoSelecionado);
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
    { id: "Cultural", nome: "Cultural" },
    { id: "Aventura", nome: "Aventura" },
    { id: "Natureza", nome: "Natureza" },
    { id: "Esporte", nome: "Esporte" },
    { id: "Contemplativo", nome: "Contemplativo" },
    { id: "Ecológico", nome: "Ecológico" },
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
              <Link to="/restaurantes" className="text-foreground hover:text-primary transition-smooth">
                Restaurantes
              </Link>
              <Link to="/passeios" className="text-primary font-medium">
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
      <section className="gradient-ocean py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Passeios no Ceará
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Viva experiências únicas e inesquecíveis em cada destino cearense
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-primary" />
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
                <SelectValue placeholder="Tipo de Passeio" />
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

      {/* Passeios Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {obterPasseios().map((passeio) => (
              <Card key={passeio.id} className="group hover:shadow-tropical transition-smooth transform hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1 group-hover:text-primary transition-smooth">
                        {passeio.nome}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium text-accent">
                        {passeio.tipo}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-primary">
                      <Star className="h-4 w-4 fill-current" />
                      {passeio.avaliacao}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{passeio.descricao}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Informações básicas */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {passeio.duracao}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {passeio.grupo}
                    </div>
                  </div>

                  {/* Preço */}
                  <div className="text-2xl font-bold text-primary">
                    {passeio.preco}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {passeio.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-accent/20 text-accent-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Inclusos */}
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Incluído:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {passeio.inclusos.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Roteiro resumido */}
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Roteiro:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {passeio.roteiro.slice(0, 3).map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-secondary" />
                          {item}
                        </li>
                      ))}
                      {passeio.roteiro.length > 3 && (
                        <li className="text-primary text-xs">
                          + {passeio.roteiro.length - 3} outras atividades
                        </li>
                      )}
                    </ul>
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Reservar Passeio
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {obterPasseios().length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nenhum passeio encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Passeios;