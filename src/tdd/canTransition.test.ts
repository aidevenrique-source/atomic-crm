import { describe, it, expect } from "vitest";
import { canTransition } from "./canTransition";

describe("canTransition (transición de estados de oportunidades)", () => {
  it("Opportunity → Proposal Sent es una transición válida", () => {
    expect(canTransition("Opportunity", "Proposal Sent")).toBe(true);
  });
});
