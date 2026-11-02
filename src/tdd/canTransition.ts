export type Stage =
  | "Opportunity"
  | "Proposal Sent"
  | "In Negotiation"
  | "Won"
  | "Lost"
  | "Delayed";

export function canTransition(_from: Stage, _to: Stage): boolean {
  return false;
}
