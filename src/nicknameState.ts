/** Passed from `/frame-1` → `/frame-2` via React Router location.state */
export type NicknameLocationState = {
  adjective: string;
  animal: string;
  /** Two-digit suffix, e.g. "07" or "42" */
  nickSuffix: string;
};

export const ADJECTIVE_OPTIONS = [
  "Silly",
  "Hungry",
  "Drowsy",
  "Maroon",
] as const;

export const ANIMAL_OPTIONS = ["Dove", "Hippo", "Tortoise", "Shark"] as const;

export function randomTwoDigitSuffix(): string {
  return String(Math.floor(Math.random() * 100)).padStart(2, "0");
}
