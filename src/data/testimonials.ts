export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  amount?: string;
  comment: string;
  date?: string;
}

export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    "id": "d1",
    "name": "Ana Paula Silveira",
    "location": "São Paulo - SP",
    "amount": "R$ 50,00",
    "comment": "Fiz minha doação pelo Pix agora mesmo. Corta o coração ver esses cãezinhos. Parabéns pelo lindo trabalho!",
    "date": "Há 4 minutos"
  },
  {
    "id": "d2",
    "name": "Marcos Vinicius Ribeiro",
    "location": "Curitiba - PR",
    "amount": "R$ 30,00",
    "comment": "Deus abençoe cada um de vocês que cuida desses anjos indefesos. Doação enviada com amor.",
    "date": "Há 12 minutos"
  },
  {
    "id": "d3",
    "name": "Juliana Mendes Carvalho",
    "location": "Belo Horizonte - MG",
    "amount": "R$ 20,00",
    "comment": "Não pude doar muito hoje, mas R$ 20 já ajuda no saco de ração. Que Deus multiplique!",
    "date": "Há 18 minutos"
  },
  {
    "id": "d4",
    "name": "Carlos Eduardo Nogueira",
    "location": "Campinas - SP",
    "amount": "R$ 100,00",
    "comment": "Transfiro todo mês para resgates. Esses 47 bichinhos merecem um teto sem goteiras e barriguinha cheia.",
    "date": "Há 26 minutos"
  },
  {
    "id": "d5",
    "name": "Patrícia Alencar Santos",
    "location": "Rio de Janeiro - RJ",
    "amount": "R$ 15,00",
    "comment": "Assisti ao vídeo e não consegui fechar sem ajudar. Pix feito na hora!",
    "date": "Há 34 minutos"
  },
  {
    "id": "d6",
    "name": "Rodrigo Barbosa de Souza",
    "location": "Goiânia - GO",
    "amount": "R$ 40,00",
    "comment": "O amor aos animais nos aproxima de Deus. Parabéns pela iniciativa.",
    "date": "Há 41 minutos"
  },
  {
    "id": "d7",
    "name": "Fernanda Lima Rocha",
    "location": "Porto Alegre - RS",
    "amount": "R$ 25,00",
    "comment": "Contribuí com R$ 25. Compartilhei também no grupo da família para mais pessoas ajudarem.",
    "date": "Há 53 minutos"
  },
  {
    "id": "d8",
    "name": "Lucas Gabriel Moreira",
    "location": "Florianópolis - SC",
    "amount": "R$ 10,00",
    "comment": "Se cada um mandar 10 reais já reformam o abrigo rapidinho. Ajudem pessoal!",
    "date": "Há 1 hora"
  },
  {
    "id": "d9",
    "name": "Camila Cristina Ferreira",
    "location": "Santos - SP",
    "amount": "R$ 50,00",
    "comment": "Ver os olhinhos daquele cãozinho caramelo na cadeira me desmontou. Pix enviado!",
    "date": "Há 1 hora"
  },
  {
    "id": "d10",
    "name": "José Roberto Martins",
    "location": "Ribeirão Preto - SP",
    "amount": "R$ 70,00",
    "comment": "Que Deus abençoe as mãos de quem cuida desses bichinhos todos os dias.",
    "date": "Há 1 hora"
  },
  {
    "id": "d11",
    "name": "Beatriz Vasconcelos",
    "location": "Fortaleza - CE",
    "amount": "R$ 35,00",
    "comment": "Minha pequena contribuição com todo carinho do mundo para a ração e remédios.",
    "date": "Há 2 horas"
  },
  {
    "id": "d12",
    "name": "Thiago Henrique Dias",
    "location": "Brasília - DF",
    "amount": "R$ 100,00",
    "comment": "Doado com muito orgulho. Que as obras no abrigo comecem logo!",
    "date": "Há 2 horas"
  },
  {
    "id": "d13",
    "name": "Larissa Manoela Prado",
    "location": "Salvador - BA",
    "amount": "R$ 20,00",
    "comment": "Amém! Ajudei com o que pude no momento, Deus proverá muito mais.",
    "date": "Há 2 horas"
  },
  {
    "id": "d14",
    "name": "Gabriel Antunes",
    "location": "Londrina - PR",
    "amount": "R$ 15,00",
    "comment": "De grão em grão a gente salva essas 47 vidinhas. Bora ajudar!",
    "date": "Há 3 horas"
  },
  {
    "id": "d15",
    "name": "Sandra Regina Toledo",
    "location": "Sorocaba - SP",
    "amount": "R$ 60,00",
    "comment": "Adotei dois cães de rua e sei a diferença que faz. Doação feita via Pix.",
    "date": "Há 3 horas"
  },
  {
    "id": "d16",
    "name": "Marcelo Queiroz",
    "location": "Recife - PE",
    "amount": "R$ 30,00",
    "comment": "A mensagem tocou fundo no meu coração. Pix enviado com sucesso.",
    "date": "Há 3 horas"
  },
  {
    "id": "d17",
    "name": "Aline Pires da Silva",
    "location": "Caxias do Sul - RS",
    "amount": "R$ 25,00",
    "comment": "Muito emocionante o apelo. Fiz minha parte com muita alegria.",
    "date": "Há 4 horas"
  },
  {
    "id": "d18",
    "name": "Rafael Guimarães",
    "location": "Vila Velha - ES",
    "amount": "R$ 50,00",
    "comment": "Todo apoio a esse resgate! Que não falte alimento nem carinho a eles.",
    "date": "Há 4 horas"
  },
  {
    "id": "d19",
    "name": "Mariana Duarte Costa",
    "location": "Natal - RN",
    "amount": "R$ 20,00",
    "comment": "R$ 20 reais enviados. Que Deus abençoe imensamente a todos do abrigo.",
    "date": "Há 4 horas"
  },
  {
    "id": "d20",
    "name": "Danilo Souza e Silva",
    "location": "Maringá - PR",
    "amount": "R$ 45,00",
    "comment": "Processo super rápido pelo link. Já recebi o comprovante. Força aos voluntários!",
    "date": "Há 5 horas"
  },
  {
    "id": "d21",
    "name": "Tatiane Ramos de Oliveira",
    "location": "São José dos Campos - SP",
    "amount": "R$ 15,00",
    "comment": "Mandei 15 reais agora. Nossos irmãozinhos de 4 patas merecem dignidade.",
    "date": "Há 5 horas"
  },
  {
    "id": "d22",
    "name": "Felipe Augusto Barreto",
    "location": "Campo Grande - MS",
    "amount": "R$ 50,00",
    "comment": "Fiz a doação e divulguei no meu Instagram. Não deixem de ajudar!",
    "date": "Há 6 horas"
  },
  {
    "id": "d23",
    "name": "Priscila Meireles",
    "location": "Uberlândia - MG",
    "amount": "R$ 30,00",
    "comment": "Cães e gatos indefesos... que Deus toque o coração de muitos outros doadores.",
    "date": "Há 6 horas"
  },
  {
    "id": "d24",
    "name": "Cláudio Miranda Júnior",
    "location": "Niterói - RJ",
    "amount": "R$ 100,00",
    "comment": "Minha contribuição de 100 reais para comprar telhas e cimento pro abrigo.",
    "date": "Há 6 horas"
  },
  {
    "id": "d25",
    "name": "Vanessa Castilho",
    "location": "Joinville - SC",
    "amount": "R$ 20,00",
    "comment": "Doei 20 reais com muito carinho. Força guerreiros!",
    "date": "Há 7 horas"
  },
  {
    "id": "d26",
    "name": "Guilherme Peixoto",
    "location": "Piracicaba - SP",
    "amount": "R$ 35,00",
    "comment": "Muito transparente e direto ao ponto. Doação realizada.",
    "date": "Há 7 horas"
  },
  {
    "id": "d27",
    "name": "Eliane Aparecida Gomes",
    "location": "Bauru - SP",
    "amount": "R$ 10,00",
    "comment": "Deixei de tomar um lanche hoje pra mandar esse Pix. Valeu cada centavo!",
    "date": "Há 8 horas"
  },
  {
    "id": "d28",
    "name": "Leonardo Farias",
    "location": "Cuiabá - MT",
    "amount": "R$ 50,00",
    "comment": "Deus abençoe a vida de todos que não fecham os olhos para o sofrimento animal.",
    "date": "Há 8 horas"
  },
  {
    "id": "d29",
    "name": "Renata Lemos",
    "location": "João Pessoa - PB",
    "amount": "R$ 25,00",
    "comment": "Aqueles filhotinhos pretinhos são lindos demais! R$ 25 enviados.",
    "date": "Há 8 horas"
  },
  {
    "id": "d30",
    "name": "André Luiz Fontes",
    "location": "Maceió - AL",
    "amount": "R$ 40,00",
    "comment": "Que essa vaquinha consiga reformar tudo que o abrigo precisa.",
    "date": "Há 9 horas"
  },
  {
    "id": "d31",
    "name": "Sabrina Fagundes",
    "location": "Pelotas - RS",
    "amount": "R$ 20,00",
    "comment": "Pix feito! Que chegue quentinho no coração dos cachorrinhos.",
    "date": "Há 9 horas"
  },
  {
    "id": "d32",
    "name": "Fábio Coimbra",
    "location": "São Bernardo do Campo - SP",
    "amount": "R$ 80,00",
    "comment": "Conheço a seriedade desse resgate. Todo mês estarei aqui apoiando.",
    "date": "Há 10 horas"
  },
  {
    "id": "d33",
    "name": "Isabela Monteiro",
    "location": "Teresina - PI",
    "amount": "R$ 15,00",
    "comment": "Ajudei com 15 reais. O pouco de muitos faz o milagre acontecer.",
    "date": "Há 10 horas"
  },
  {
    "id": "d34",
    "name": "Hugo Leonardo Sales",
    "location": "Jundiaí - SP",
    "amount": "R$ 30,00",
    "comment": "Amém! Doação realizada. Não deixem de compartilhar!",
    "date": "Há 11 horas"
  },
  {
    "id": "d35",
    "name": "Débora Cristina Tavares",
    "location": "Juiz de Fora - MG",
    "amount": "R$ 50,00",
    "comment": "Minha doação foi comovida pelo olhar daquele cachorrinho machucado. Deus cuide deles.",
    "date": "Há 11 horas"
  },
  {
    "id": "d36",
    "name": "Alexandre Magno",
    "location": "São Luís - MA",
    "amount": "R$ 20,00",
    "comment": "Contribuição enviada via Pix. Parabéns a todos envolvidos no socorro.",
    "date": "Há 12 horas"
  },
  {
    "id": "d37",
    "name": "Mônica Viana",
    "location": "Taubaté - SP",
    "amount": "R$ 10,00",
    "comment": "Fiz um Pix de 10 reais. Qualquer valor conta gente!",
    "date": "Há 12 horas"
  },
  {
    "id": "d38",
    "name": "Bruno César Rezende",
    "location": "Anápolis - GO",
    "amount": "R$ 100,00",
    "comment": "Fiz pelo cartão de crédito rapidinho. Que proteja todos esses anjinhos.",
    "date": "Há 13 horas"
  },
  {
    "id": "d39",
    "name": "Simone Freitas Bueno",
    "location": "Blumenau - SC",
    "amount": "R$ 25,00",
    "comment": "Deus os abençoe abundantemente pelo amor aos animais desamparados.",
    "date": "Há 13 horas"
  },
  {
    "id": "d40",
    "name": "Cristiano Pacheco",
    "location": "Canoas - RS",
    "amount": "R$ 30,00",
    "comment": "R$ 30,00 enviados. Gratidão a quem cuida com tanto carinho!",
    "date": "Há 14 horas"
  },
  {
    "id": "d41",
    "name": "Carla Vasquez",
    "location": "Osasco - SP",
    "amount": "R$ 15,00",
    "comment": "Vídeo emocionante. Já fiz o Pix e mandei no grupo do trabalho.",
    "date": "Há 15 horas"
  },
  {
    "id": "d42",
    "name": "Eduardo Brandão",
    "location": "Vitória - ES",
    "amount": "R$ 50,00",
    "comment": "Doação concluída. Que o abrigo fique seguro e sem goteiras logo.",
    "date": "Há 16 horas"
  },
  {
    "id": "d43",
    "name": "Tereza Cristina Neves",
    "location": "Aracaju - SE",
    "amount": "R$ 20,00",
    "comment": "Amém! Doei 20 reais de todo meu coração.",
    "date": "Há 17 horas"
  },
  {
    "id": "d44",
    "name": "Maurício Zanetti",
    "location": "Franca - SP",
    "amount": "R$ 60,00",
    "comment": "Paz e luz a todos que estendem a mão para quem não pode pedir ajuda.",
    "date": "Há 18 horas"
  },
  {
    "id": "d45",
    "name": "Letícia Fontana",
    "location": "Foz do Iguaçu - PR",
    "amount": "R$ 30,00",
    "comment": "Contribuí com 30 reais. Que consigam alimentar e tratar todos!",
    "date": "Há 19 horas"
  },
  {
    "id": "d46",
    "name": "Paulo Ricardo Macedo",
    "location": "Belém - PA",
    "amount": "R$ 100,00",
    "comment": "Transferência concluída. Trabalho abençoado e necessário.",
    "date": "Há 20 horas"
  },
  {
    "id": "d47",
    "name": "Gisele Cavalcante",
    "location": "Campina Grande - PB",
    "amount": "R$ 20,00",
    "comment": "Doei e pedi a Deus para guardar cada um desses 47 bichinhos.",
    "date": "Há 21 horas"
  },
  {
    "id": "d48",
    "name": "Robson Siqueira",
    "location": "Limeira - SP",
    "amount": "R$ 15,00",
    "comment": "Muito fácil de doar. R$ 15 enviados. Vamos bater essa meta!",
    "date": "Há 22 horas"
  },
  {
    "id": "d49",
    "name": "Kelly Cristine Valente",
    "location": "Barueri - SP",
    "amount": "R$ 50,00",
    "comment": "Aquele cãozinho no atendimento veterinário partiu meu coração. Pix feito!",
    "date": "Há 23 horas"
  },
  {
    "id": "d50",
    "name": "Valter Medeiros",
    "location": "Passo Fundo - RS",
    "amount": "R$ 40,00",
    "comment": "40 reais doados para esses focinhos carentes. Que Deus abençoe!",
    "date": "Há 1 dia"
  }
];
