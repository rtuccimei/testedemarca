import { MaturityLevel } from '../types';

export const maturityLevels: MaturityLevel[] = [
  {
    min: 0,
    max: 25,
    level: "Marca Emergente",
    description: "Sua marca ainda é pouco percebida como um ativo estratégico. Há um grande potencial para desenvolver uma identidade mais forte e consistente, alinhando processos internos e comunicação. Nesta fase, investimentos em fundamentos de branding podem trazer retornos significativos."
  },
  {
    min: 26,
    max: 50,
    level: "Marca em Evolução",
    description: "Você já iniciou o caminho da gestão de marca, com alguns elementos estabelecidos e reconhecimento da sua importância. Agora é o momento de fortalecer a consistência, integrar melhor os processos e aumentar o engajamento interno. Sua marca tem potencial para se tornar um diferencial competitivo com os investimentos certos."
  },
  {
    min: 51,
    max: 75,
    level: "Marca Consolidada",
    description: "Sua marca tem fundamentos sólidos e práticas integradas. Ela já é reconhecida como um ativo importante e há sistemas para garantir sua consistência. O próximo passo é aprimorar a mensuração de resultados, inovar na experiência do cliente e fortalecer ainda mais o alinhamento interno para maximizar o valor da sua marca."
  },
  {
    min: 76,
    max: 100,
    level: "Marca Referência",
    description: "Sua marca é um ativo estratégico central, admirada e consistente. Ela possui uma identidade singular, processos integrados e métricas avançadas. Neste nível, sua marca gera valor sustentável, influencia decisões estratégicas e se adapta continuamente. Continue inovando e compartilhando suas práticas de excelência."
  }
];