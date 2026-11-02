export type Stage =
  | "Opportunity"
  | "Proposal Sent"
  | "In Negotiation"
  | "Won"
  | "Lost"
  | "Delayed";

const CLOSED_STAGES: Stage[] = ["Won", "Lost"];

export function canTransition(from: Stage, to: Stage): boolean {
  if (from === to) return false;
  return !CLOSED_STAGES.includes(from);
}
