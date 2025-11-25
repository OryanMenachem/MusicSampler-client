import { useEffect } from "react";
import { sortNotesByColumn, playAudio } from "../utils/utils";
import type { ActiveColumnContext, UsePlayerProps } from "../types/types";
import useGetContext from "./UseGetContext";

export default function usePlayer({ notes, isLoop, isPlay }: UsePlayerProps) {
  const { setActiveColumn } = useGetContext(
    "activeColumnContext"
  ) as ActiveColumnContext;

  useEffect(() => {
    if (!isPlay) return;
    let cancelled = false;
    const runPlay = async () => {
      const sortedNotesColumn = sortNotesByColumn(notes);
      do {
        for (const column in sortedNotesColumn) {
          if (cancelled) return;
          setActiveColumn(Number(column));
          const notesColumn = sortedNotesColumn[column];
          for (const note of notesColumn) {
            if (!note.isNoteOn) continue;
            playAudio(note.instrument, note.noteName);
          }
          await new Promise((res) => setTimeout(res, 250));
        }
      } while (isLoop && !cancelled);
      setActiveColumn(null);
    };

    runPlay();

    return () => {
      cancelled = true;
    };
  }, [isLoop, isPlay]);
}
