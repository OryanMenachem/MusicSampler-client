import { useEffect } from "react";
import { sortNotesByColumn, playAudio } from "../utils/utils";
import type { InstrumentContext, NotesContext } from "../types/types";
import useGetContext from "./UseGetContext";
import type { TransportControlsContext } from "../contexts/context/TransportControls.context";

export default function usePlayer() {
  const { state, dispatch } = useGetContext(
    "transportControlsContext"
  ) as TransportControlsContext;
  const { notes } = useGetContext("notesContext") as NotesContext;
  const { instrument } = useGetContext(
    "instrumentContext"
  ) as InstrumentContext;

  useEffect(() => {
    if (!state.isPlaying && !state.isLooping) return;
    let cancelled = false;
    const runPlay = async () => {
      const sortedNotesColumn = sortNotesByColumn(notes!);
      do {
        for (const column in sortedNotesColumn) {
          if (cancelled) return;
          const notesColumn = sortedNotesColumn[column];
          dispatch({ type: "SET_ACTIVE_COLUMN", payload: Number(column) });
          for (const note of notesColumn) {
            if (!note.isNoteOn) continue;
            playAudio(instrument, note.noteName);
          }
          await new Promise((res) => setTimeout(res, 250));
        }
      } while (state.isLooping && !cancelled);
      dispatch({ type: "SET_ACTIVE_COLUMN", payload: 0 });
    };

    runPlay();

    return () => {
      cancelled = true;
    };
  }, [state.isPlaying, state.restart, state.isLooping]);
}
