import { useContext } from "react";
import { handleReset } from "../button.service";
import { notesContext } from "../../../contexts/Notes.context";
import type { NotesContext } from "../../../types/types";

export default function ResetBtn(): React.JSX.Element {
  const { notes, setNotes } = useContext(notesContext) as NotesContext;
  return (
    <button
      className="btn reset--btn"
      onClick={() => handleReset(setNotes, notes)}
    >
      Reset
    </button>
  );
}
