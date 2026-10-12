// Conteúdo do site. Planos e preços são os mesmos do aplicativo (src/lib/plans.ts no app).

export type Plan = {
  id: 'basico' | 'plus' | 'premium' | 'empresarial';
  name: string;
  label: string;
  price: string;
  pricePrefix?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  dark?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: 'basico',
    name: 'Básico',
    label: 'Essencial',
    price: '14,90',
    description: 'Para quem deseja ter seu perfil disponível para clientes.',
    features: [
      'Perfil público com informações básicas',
      'Nome, profissão, descrição curta e região atendida',
      'Informações de contato',
      'Até 3 serviços cadastrados',
      'Visibilidade padrão nas pesquisas',
      'Sem galeria de fotos de trabalhos',
    ],
  },
  {
    id: 'plus',
    name: 'Plus+',
    label: 'Recomendado',
    price: '29,90',
    description: 'Para quem quer divulgar melhor seus serviços.',
    highlighted: true,
    features: [
      'Tudo do Básico',
      'Perfil mais completo',
      'Até 5 fotos de trabalhos e projetos',
      'Até 10 serviços cadastrados',
      'Maior destaque nas pesquisas',
      'Selo Plus+ no perfil',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    label: 'Destaque máximo',
    price: '49,90',
    description: 'Para quem deseja se destacar e fortalecer sua presença.',
    features: [
      'Tudo do Plus+',
      'Até 10 fotos de trabalhos e projetos',
      'Perfil com apresentação ampliada',
      'Prioridade de exibição nas pesquisas',
      'Mais serviços cadastrados',
      'Estatísticas de visualizações e contatos, quando disponíveis',
    ],
  },
  {
    id: 'empresarial',
    name: 'Empresarial',
    label: 'Para empresas',
    price: '85,00',
    pricePrefix: 'A partir de',
    description: 'Para empresas que precisam divulgar equipes e vários profissionais.',
    dark: true,
    features: [
      'Perfil institucional',
      'Cadastro de vários profissionais',
      'Possibilidade de combinar perfis Plus+ e Premium',
      'Galeria de projetos da empresa',
      'Gestão centralizada dos perfis',
      'Pacotes personalizados para equipes maiores',
    ],
  },
];

/** Tabela comparativa: somente o que está descrito nos planos. `null` = não incluso. */
export const COMPARISON: { label: string; values: (string | boolean | null)[] }[] = [
  { label: 'Perfil público', values: [true, true, true, 'Institucional'] },
  { label: 'Informações de contato', values: [true, true, true, true] },
  { label: 'Serviços cadastrados', values: ['Até 3', 'Até 10', 'Mais serviços', 'Vários profissionais'] },
  { label: 'Fotos de trabalhos e projetos', values: [null, 'Até 5', 'Até 10', 'Galeria da empresa'] },
  { label: 'Destaque nas pesquisas', values: ['Padrão', 'Maior destaque', 'Prioridade', 'Perfis Plus+ e Premium'] },
  { label: 'Selo no perfil', values: [null, 'Plus+', null, null] },
  { label: 'Apresentação ampliada', values: [null, null, true, null] },
  { label: 'Estatísticas de visualizações e contatos', values: [null, null, 'Quando disponíveis', null] },
  { label: 'Gestão centralizada dos perfis', values: [null, null, null, true] },
  { label: 'Pacotes para equipes maiores', values: [null, null, null, 'Sob consulta'] },
];

export const CATEGORIES = [
  'Casa', 'Auto', 'Beleza', 'Tecnologia', 'Elétrica', 'Encanamento', 'Reformas e Construção', 'Pintura', 'Limpeza',
  'Jardinagem', 'Mudanças e Fretes', 'Montagem de Móveis', 'Ar-condicionado', 'Eletrodomésticos', 'Chaveiro',
  'Dedetização', 'Pets', 'Saúde e Bem-estar', 'Aulas e Cursos', 'Eventos', 'Fotografia e Vídeo', 'Design e Marketing',
  'Consultoria', 'Costura e Moda', 'Cuidadores', 'Segurança', 'Alimentação',
];

export const FAQ: { question: string; answer: string }[] = [
  {
    question: 'Quanto custa para quem quer contratar um serviço?',
    answer: 'Nada. Quem procura profissionais usa o EasyWork de graça: cria a conta, busca, conversa e avalia sem pagar mensalidade.',
  },
  {
    question: 'Preciso baixar algum aplicativo?',
    answer: 'Não. O EasyWork funciona direto no navegador do celular ou do computador. No celular, você pode adicioná-lo à tela inicial e abrir como um aplicativo.',
  },
  {
    question: 'O pagamento do serviço é feito pelo EasyWork?',
    answer: 'Não. O EasyWork aproxima você do profissional: valores, horários e forma de pagamento do serviço são combinados diretamente entre vocês pela conversa.',
  },
  {
    question: 'Como meu perfil de profissional aparece nas buscas?',
    answer: 'Depois de criar a conta, um passo a passo ajuda você a escolher sua categoria, sua especialidade, a cidade e a região onde atende. Os planos Plus+ e Premium aumentam o destaque do seu perfil nos resultados.',
  },
  {
    question: 'Em quais cidades o EasyWork funciona?',
    answer: 'Começamos por Campo Mourão, no Paraná. A plataforma está preparada para receber profissionais e clientes de outras cidades, que serão atendidas aos poucos.',
  },
  {
    question: 'Como assino ou cancelo um plano?',
    answer: 'Tudo é feito dentro do aplicativo, na tela de Planos. A assinatura é mensal, processada pelo Mercado Pago, e pode ser cancelada pela mesma tela.',
  },
  {
    question: 'Meus dados pessoais ficam públicos?',
    answer: 'Não. Data de nascimento, e-mail e telefone do seu cadastro ficam visíveis só para você. O contato entre cliente e profissional acontece pela conversa do aplicativo, onde aparecem apenas as informações compartilhadas, como a cidade e o serviço em questão.',
  },
  {
    question: 'O EasyWork tem ligação com a prefeitura ou algum órgão público?',
    answer: 'Não. O EasyWork é uma plataforma privada e independente.',
  },
];
