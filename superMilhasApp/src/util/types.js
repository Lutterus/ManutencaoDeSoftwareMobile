type MilesAgency = {
  nome: string,
  somaMilhas: number,
  milha_expiracao_maisProxima: Date,
  programa_default: Array<ProgramDefault>
};

type ProgramDefault = {
  nome: string,
  imagem: string
}

type Response = {
  success: boolean,
  content: Object,
  messages: Array<String>
};

export { MilesAgency, Response };
