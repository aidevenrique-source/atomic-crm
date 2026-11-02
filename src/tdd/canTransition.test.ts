import { describe, it, expect } from "vitest";
import { canTransition, type Stage } from "./canTransition";

describe("canTransition (transición de estados de oportunidades)", () => {
  it.each<[Stage, Stage]>([
    ["Opportunity", "Proposal Sent"],
    ["In Negotiation", "Won"],
    ["Opportunity", "Lost"],
    ["Delayed", "Opportunity"],
  ])("%s → %s es válida", (from, to) => {
    expect(canTransition(from, to)).toBe(true);
  });

  it.each<[Stage, Stage]>([
    ["Won", "Opportunity"],
    ["Won", "Lost"],
    ["Lost", "In Negotiation"],
    ["Lost", "Won"],
    ["In Negotiation", "In Negotiation"],
  ])("%s → %s es inválida", (from, to) => {
    expect(canTransition(from, to)).toBe(false);
  });
});
