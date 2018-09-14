type MilesAgency = {
  nome: string,
  somaMilhas: number,
  milha_expiracao_maisProxima: Date,
  imagem: string
};

type Response = {
  success: boolean,
  content: Object,
  messages: Array<String>
};

export { MilesAgency, Response };
