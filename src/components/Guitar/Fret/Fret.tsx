import { Note } from "../services/types";
import css from "./fret.module.css";
import cn from "classnames";

interface FretProps {
  notes: Note[];
  order: number;
  isEmpty?: boolean;
}

export const Fret = ({ notes, order, isEmpty }: FretProps) => {
  const reversedNotes = [...notes].reverse();
  return (
    <div className={css.container}>
      <p className={css.order}>{order}</p>
      {reversedNotes.map((note) => (
        <div
          className={cn(isEmpty ? css.emptyString : css.guitarString, {
            [css.active]: note.isActive,
          })}
          data-value={note.note}
        >
          {isEmpty && note.note}
        </div>
      ))}
    </div>
  );
};
