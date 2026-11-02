export type Stage =
  | "Opportunity"
  | "Proposal Sent"
  | "In Negotiation"
  | "Won"
  | "Lost"
  | "Delayed";

export function canTransition(from: Stage, to: Stage): boolean {
  if (from === to) return false;
  if (from === "Won" || from === "Lost") return false;
  return true;
}
