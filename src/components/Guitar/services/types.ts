export interface Note {
  note: string;
  description: string;
  isActive?: boolean;
}

export interface GetChordsProps {
  startFret?: number;
  finishFret?: number;
  maxSize?: number;
  noteRepeat?: number;
  duplicateNotes?: number;
}
