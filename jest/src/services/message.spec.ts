import { Message } from "./message";

const createSut = () => new Message();

describe("Message Test Suite", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return undefined", () => {
    const sut = createSut();
    const result = sut.sendMessage("Mesagem de teste");
    expect(result).toBe(undefined);
  });

  it("should call console log one time", () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, "log");
    sut.sendMessage("Mesagem de teste");
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it("should call console log with 'Saved:'", () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, "log");
    sut.sendMessage("Mesagem de teste");
    expect(consoleSpy).toHaveBeenCalledWith("Message:", "Mesagem de teste");
  });
});
