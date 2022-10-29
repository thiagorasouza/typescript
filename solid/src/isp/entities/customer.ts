import {
  EnterpriseCustomerProtocolol,
  IndividualCustomerProtocolol,
  CustomerOrder,
} from "./interfaces/customer-protocol";

export class IndividualCustomer
  implements IndividualCustomerProtocolol, CustomerOrder
{
  constructor(
    public firstName: string,
    public lastName: string,
    public cpf: string
  ) {}

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getID(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocolol, CustomerOrder
{
  constructor(public name: string, public cnpj: string) {}

  getName(): string {
    return this.name;
  }

  getID(): string {
    return this.cnpj;
  }
}
