import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    dimension: "Identidade e Cultura",
    question: "Como você avalia a identidade e a cultura da sua marca?",
    options: [
      { value: 0, text: "Não possuímos uma identidade de marca ou cultura estabelecida" },
      { value: 1, text: "Existem alguns elementos de identidade, mas não são bem definidos ou integrados" },
      { value: 2, text: "Temos uma identidade básica, mas a cultura organizacional não a reflete completamente" },
      { value: 3, text: "Nossa identidade é clara e a cultura começa a se alinhar com os valores da marca" },
      { value: 4, text: "Identidade forte e cultura bem estabelecida, com boa integração entre ambas" },
      { value: 5, text: "Nossa identidade e cultura são totalmente integradas e vividas em todos os níveis da organização" }
    ]
  },
  {
    id: 2,
    dimension: "Posicionamento e Estratégia",
    question: "Como está o posicionamento estratégico da sua marca no mercado?",
    options: [
      { value: 0, text: "Não temos um posicionamento estratégico definido" },
      { value: 1, text: "Temos alguma noção de posicionamento, mas não é formalizado ou consistente" },
      { value: 2, text: "Possuímos um posicionamento básico, mas falta diferenciação clara" },
      { value: 3, text: "Nosso posicionamento é bem definido e começamos a nos diferenciar da concorrência" },
      { value: 4, text: "Posicionamento forte e estratégico, com diferenciação clara e valorizada pelos clientes" },
      { value: 5, text: "Posicionamento excepcional que nos torna referência no mercado" }
    ]
  },
  {
    id: 3,
    dimension: "Liderança e Governança",
    question: "Como a liderança da empresa se envolve com a gestão da marca?",
    options: [
      { value: 0, text: "A liderança não se envolve com questões de marca" },
      { value: 1, text: "Há algum interesse, mas sem envolvimento sistemático" },
      { value: 2, text: "A liderança reconhece a importância, mas o envolvimento ainda é limitado" },
      { value: 3, text: "Há engajamento consistente da liderança com questões de marca" },
      { value: 4, text: "A liderança é ativa na gestão da marca e a considera um ativo estratégico" },
      { value: 5, text: "A marca é central na governança e a liderança é sua principal defensora" }
    ]
  },
  {
    id: 4,
    dimension: "Experiência do Cliente",
    question: "Como sua marca gerencia a experiência dos clientes?",
    options: [
      { value: 0, text: "Não gerenciamos ativamente a experiência do cliente" },
      { value: 1, text: "Temos consciência da importância, mas sem processos estruturados" },
      { value: 2, text: "Existem algumas iniciativas, mas não são integradas ou consistentes" },
      { value: 3, text: "Temos processos para gerir a experiência, com monitoramento regular" },
      { value: 4, text: "Experiência do cliente é prioridade, com processos bem definidos e feedback contínuo" },
      { value: 5, text: "A experiência do cliente é excepcional e totalmente alinhada com nossa marca" }
    ]
  },
  {
    id: 5,
    dimension: "Estrutura Organizacional",
    question: "Como a estrutura da sua organização suporta a gestão da marca?",
    options: [
      { value: 0, text: "Não temos estrutura dedicada à gestão da marca" },
      { value: 1, text: "Responsabilidades de marca são secundárias e dispersas" },
      { value: 2, text: "Existe uma estrutura básica, mas com recursos e autoridade limitados" },
      { value: 3, text: "Temos uma estrutura definida com recursos adequados para gerir a marca" },
      { value: 4, text: "Estrutura robusta e integrada, com forte suporte organizacional" },
      { value: 5, text: "Estrutura organizacional totalmente alinhada para potencializar o valor da marca" }
    ]
  },
  {
    id: 6,
    dimension: "Inovação e Diferenciação",
    question: "Como sua marca aborda inovação e diferenciação no mercado?",
    options: [
      { value: 0, text: "Não temos processos de inovação relacionados à marca" },
      { value: 1, text: "Inovamos ocasionalmente, sem relação clara com a estratégia de marca" },
      { value: 2, text: "Temos iniciativas de inovação, mas com conexão limitada à diferenciação da marca" },
      { value: 3, text: "Nossa inovação é consistente e contribui para a diferenciação da marca" },
      { value: 4, text: "Processos de inovação bem estabelecidos que fortalecem nossa diferenciação" },
      { value: 5, text: "Inovação é parte central da nossa marca, criando diferenciação única" }
    ]
  },
  {
    id: 7,
    dimension: "Marketing e Comunicação",
    question: "Como estão as práticas de marketing e comunicação da sua marca?",
    options: [
      { value: 0, text: "Comunicação e marketing são realizados sem planejamento ou consistência" },
      { value: 1, text: "Temos algumas ações básicas, mas sem estratégia clara" },
      { value: 2, text: "Existe um planejamento básico, mas com integração limitada com a marca" },
      { value: 3, text: "Nossa comunicação é consistente e alinhada com a identidade da marca" },
      { value: 4, text: "Estratégia integrada de comunicação que fortalece a percepção da marca" },
      { value: 5, text: "Marketing e comunicação excepcionais que amplificam e enriquecem a marca" }
    ]
  },
  {
    id: 8,
    dimension: "Indicadores e Métricas",
    question: "Como sua empresa mede e monitora o desempenho da marca?",
    options: [
      { value: 0, text: "Não medimos o desempenho da nossa marca" },
      { value: 1, text: "Temos algumas métricas básicas, mas sem análise sistemática" },
      { value: 2, text: "Monitoramos alguns indicadores, mas sem integração com decisões estratégicas" },
      { value: 3, text: "Possuímos métricas estabelecidas que informam nossas decisões" },
      { value: 4, text: "Sistema robusto de métricas que orientam investimentos e estratégias" },
      { value: 5, text: "Métricas avançadas e integradas que demonstram o valor da marca" }
    ]
  },
  {
    id: 9,
    dimension: "Tecnologia e Ferramentas",
    question: "Como tecnologia e ferramentas suportam a gestão da sua marca?",
    options: [
      { value: 0, text: "Não utilizamos tecnologias específicas para gestão da marca" },
      { value: 1, text: "Usamos ferramentas básicas, mas sem integração ou estratégia" },
      { value: 2, text: "Temos algumas tecnologias implementadas, mas com uso limitado" },
      { value: 3, text: "Utilizamos ferramentas adequadas que facilitam a gestão da marca" },
      { value: 4, text: "Tecnologias avançadas e integradas que potencializam a marca" },
      { value: 5, text: "Ecossistema tecnológico que proporciona vantagem competitiva" }
    ]
  },
  {
    id: 10,
    dimension: "Engajamento e Treinamento Interno",
    question: "Como está o engajamento dos colaboradores com a marca?",
    options: [
      { value: 0, text: "Colaboradores não conhecem ou não se engajam com a marca" },
      { value: 1, text: "Existe conhecimento básico, mas sem engajamento significativo" },
      { value: 2, text: "Alguns colaboradores estão engajados, mas sem programas estruturados" },
      { value: 3, text: "Temos treinamentos e programas de engajamento com resultados positivos" },
      { value: 4, text: "Forte engajamento interno, com colaboradores atuando como embaixadores" },
      { value: 5, text: "Cultura excepcional onde todos promovem a marca naturalmente" }
    ]
  },
  {
    id: 11,
    dimension: "Processos e Cultura de Entrega",
    question: "Como seus processos internos garantem a entrega consistente da promessa da marca?",
    options: [
      { value: 0, text: "Não temos processos relacionados à consistência da marca" },
      { value: 1, text: "Existem alguns processos, mas sem foco na consistência da marca" },
      { value: 2, text: "Processos básicos existem, mas com integração limitada" },
      { value: 3, text: "Nossos processos consideram a marca e buscam garantir sua consistência" },
      { value: 4, text: "Processos bem definidos que asseguram a entrega consistente" },
      { value: 5, text: "Cultura e processos que garantem consistência superior" }
    ]
  },
  {
    id: 12,
    dimension: "Gestão de Stakeholders",
    question: "Como sua marca se relaciona com diferentes stakeholders?",
    options: [
      { value: 0, text: "Não gerenciamos ativamente o relacionamento com stakeholders" },
      { value: 1, text: "Temos alguma atenção a stakeholders, mas sem estratégia" },
      { value: 2, text: "Existem iniciativas pontuais para alguns grupos" },
      { value: 3, text: "Gerenciamos bem os principais stakeholders com mensagens alinhadas" },
      { value: 4, text: "Estratégia abrangente de relacionamento baseada em nossa marca" },
      { value: 5, text: "Gestão excepcional que cria valor compartilhado com stakeholders" }
    ]
  }
];