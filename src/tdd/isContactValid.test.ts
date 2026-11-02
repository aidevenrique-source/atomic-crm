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

  it.each([
    [
      "R2 sin responsable",
      { firstName: "Ana", lastName: "Pérez", accountManagerId: null },
    ],
    [
      "R3 sin apellido",
      { firstName: "Ana", lastName: "", accountManagerId: 1 },
    ],
    [
      "R4 sin apellido ni responsable",
      { firstName: "Ana", lastName: "", accountManagerId: null },
    ],
    [
      "R5 sin nombre",
      { firstName: "", lastName: "Pérez", accountManagerId: 1 },
    ],
    [
      "R6 sin nombre ni responsable",
      { firstName: "", lastName: "Pérez", accountManagerId: null },
    ],
    [
      "R7 sin nombre ni apellido",
      { firstName: "", lastName: "", accountManagerId: 1 },
    ],
    ["R8 sin nada", { firstName: "", lastName: "", accountManagerId: null }],
    [
      "nombre solo espacios",
      { firstName: "   ", lastName: "Pérez", accountManagerId: 1 },
    ],
  ])("%s → inválido", (_nombre, contacto) => {
    expect(isContactValid(contacto)).toBe(false);
  });
});
