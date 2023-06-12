import { useRef } from "react";
import { GuitarService } from "./services/GuitarService";
import css from "./guitar.module.css";
import { Fret } from "./Fret/Fret";

const range = (amount: number) => Array(amount).fill(null);

interface GuitarProps {
  activeChord?: string;
}

export const Guitar = ({ activeChord }: GuitarProps) => {
  const guitarService = useRef(new GuitarService()).current;

  const emptyChord = guitarService.getNotesByFret(0);
  const activeShifts = guitarService.getShiftsByChordName(activeChord);

  return (
    <div className={css.container}>
      {range(guitarService.amountFrets).map((_, chordOrder) => {
        const notes = guitarService
          .getNotesByFret(chordOrder)
          .map((note, index) => ({
            ...note,
            isActive: activeShifts[index] === chordOrder,
          }));
        return (
          <Fret notes={notes} order={chordOrder} isEmpty={chordOrder === 0} />
        );
      })}
    </div>
  );
};
