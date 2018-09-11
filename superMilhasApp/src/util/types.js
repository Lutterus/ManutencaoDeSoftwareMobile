type MilesAgency = {
  agencyName: string,
  agencyImage: string,
  expirationData: string,
  miles: int
};

type Response = {
  success: boolean,
  content: Object,
  messages: Array<String>
};

export { MilesAgency };
