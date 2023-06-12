import { Note } from "./types";

export const notes = {
  A: "Ля",
  "A#": "Ля диез",
  B: "Си",
  C: "До",
  "C#": "До диез",
  D: "Ре",
  "D#": "Ре диез",
  E: "Ми",
  F: "Фа",
  "F#": "Фа диез",
  G: "Соль",
  "G#": "Соль диез",
};
export const listNotes: Note[] = Object.entries(notes).map(([key, value]) => ({
  note: key,
  description: value,
}));
export const DEFAULT_GUITAR_FORMATION = [
  notes.E,
  notes.B,
  notes.G,
  notes.D,
  notes.A,
  notes.E,
];
