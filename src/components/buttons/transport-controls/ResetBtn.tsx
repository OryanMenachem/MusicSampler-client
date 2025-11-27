import type {
  TransportControlsContext,
  NotesContext,
  Notes,
} from "../../../types/types";
import { useGetContext } from "../../../hooks";

export default function ResetBtn(): React.JSX.Element {
  const { notes, setNotes } = useGetContext("notesContext") as NotesContext;
  const { dispatch } = useGetContext(
    "transportControlsContext"
  ) as TransportControlsContext;


  const handleReset = (): void => {
    dispatch({ type: "RESET" });
    const updatedNotes: Notes = {};
    for (const key in notes) {
      updatedNotes[key] = {
        ...notes[key],
        isNoteOn: false,
      };
    }
    setNotes(updatedNotes);
  };
  return (
    <button className="btn reset--btn" onClick={handleReset}>
      Reset
    </button>
  );
}
