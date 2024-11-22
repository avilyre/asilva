import { dateTimeFormat } from "./index";

describe("dateTimeFormat", () => {
  it("Should return a formatted date string", () => {
    const date = new Date("2024-08-19:13:00:00");
    const formattedDate = dateTimeFormat(date);

    expect(formattedDate).to.be.equal("ago. de 2024");
  });

  it("Should return a formatted date with options", () => {
    const date = new Date("2024-10-05");
    const formattedDate = dateTimeFormat(date, {
      weekday: "long",
    });

    expect(formattedDate).to.includes("sábado");
  });
});
