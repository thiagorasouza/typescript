export interface IndividualCustomerProtocolol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocolol {
  name: string;
  cnpj: string;
}

export interface CustomerOrder {
  getName(): string;
  getID(): string;
}
