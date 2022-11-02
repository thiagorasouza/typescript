import { EnterpriseCustomer, IndividualCustomer } from "./customer";

describe("IndividualCustomer Test Suite", () => {
  it("should return individual customer name", () => {
    const sut = new IndividualCustomer("John", "Doe", "111.111.111-00");
    const result = sut.getName();
    const expected = "John Doe";
    expect(result).toBe(expected);
  });

  it("should return individual customer id", () => {
    const sut = new IndividualCustomer("John", "Doe", "111.111.111-00");
    const result = sut.getID();
    const expected = "111.111.111-00";
    expect(result).toBe(expected);
  });
});

describe("EnterpriseCustomer Test Suite", () => {
  it("should return enteprise customer name", () => {
    const sut = new EnterpriseCustomer("Solar LLC", "11.111.111/0001-00");
    const result = sut.getName();
    const expected = "Solar LLC";
    expect(result).toBe(expected);
  });

  it("should return enteprise customer id", () => {
    const sut = new EnterpriseCustomer("John", "11.111.111-00");
    const result = sut.getID();
    const expected = "11.111.111-00";
    expect(result).toBe(expected);
  });
});
