import type {
  Notes,
  HandleRemoveColumnArgs,
  HandlePlayToggleArgs,
} from "../../types/types";
import { playAudio, sortNotesByColumn } from "../../utils/utils";

const handlePlayToggle = async ({
  notes,
  abortedRef,
}: HandlePlayToggleArgs): Promise<void> => {
  const sortedNotesColumn = sortNotesByColumn(notes);
  for (const column in sortedNotesColumn) {
    const notesColumn = sortedNotesColumn[column];
    for (const note of notesColumn) {
      if (abortedRef.current.aborted) {
        break;
      }
      if (!note.isNoteOn) {
        continue;
      }

      playAudio(note.instrument, note.noteName);
    }
    await new Promise<void>((resolve) => {
      setTimeout(resolve, 250);
    });
  }
};

const handleReset = (
  setNotes: React.Dispatch<React.SetStateAction<Notes>>,
  notes: Notes
): void => {
  for (const key in notes) {
    setNotes((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        isNoteOn: false,
      },
    }));
  }
};

const handleRemoveColumn = ({
  notes,
  setNotes,
  columns,
  setColumns,
}: HandleRemoveColumnArgs) => {
  const initialColumns = 32;
  if (columns === initialColumns) {
    return;
  }
  for (const noteId in notes) {
    const note = notes[noteId];
    if (note.column === columns && note.isNoteOn) {
      setNotes((prev) => {
        const newNotes = { ...prev };
        delete newNotes[noteId];
        return newNotes;
      });
    }
  }
  setColumns((prev) => prev - 1);
};

export { handlePlayToggle, handleReset, handleRemoveColumn };

 