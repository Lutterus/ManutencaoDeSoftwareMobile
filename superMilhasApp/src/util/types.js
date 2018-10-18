type MilesAgency = {
  nome: string,
  somaMilhas: number,
  milha_expiracao_maisProxima: Milha,
  programa_default: Array<ProgramDefault>
};

type ProgramDefault = {
  nome: string,
  imagem: string
}

type Milha = {
  dt_expiracao: Date,
  quantidade: number
}

type Response = {
  success: bolean,
  content: Object,
  messages: Array<String>
};

export { MilesAgency, Response };
