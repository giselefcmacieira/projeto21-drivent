export type ApplicationError = {
  name: string;
  message: string;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};

export type AddressInfo = {
  logradouro: string | null;
  complemento: string | null;
  bairro: string | null;
  cidade: string | null;
  uf: string | null;
}

export type APIInfo = {
  data:{
    cep: string | null;
    logradouro: string | null;
    complemento: string | null;
    bairro: string | null;
    localidade: string | null;
    uf: string | null;
    ibge: string | null;
    gia: string | null;
    ddd: string | null;
    siafi: string | null;
    erro ?: boolean
  }
}

export type CEPquery = {
  cep: number | string
}