import { describe, it, expect } from "vitest";
import { isContactValid } from "./isContactValid";

describe("isContactValid (tabla de decisión)", () => {
  it("R1: nombre, apellido y responsable presentes → válido", () => {
    expect(
      isContactValid({
        firstName: "Ana",
        lastName: "Pérez",
        accountManagerId: 1,
      }),
    ).toBe(true);
  });
});
