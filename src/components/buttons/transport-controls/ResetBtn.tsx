import { useGetContext } from "../../../hooks";
import type {
  NotesContext,
  Notes,
  ControlsPlayerContext,
  ActiveColumnContext,
} from "../../../types/types";

export default function ResetBtn(): React.JSX.Element {
  const { notes, setNotes } = useGetContext("notesContext") as NotesContext;
  const { setIsPlaying: setIsPlay } = useGetContext(
    "controlsPlayerContext"
  ) as ControlsPlayerContext;
  const { setActiveColumnIndex: setActiveColumn } = useGetContext(
    "activeColumnContext"
  ) as ActiveColumnContext;

  const handleReset = (): void => {
    setIsPlay(false);
    setActiveColumn((prev) => (prev = 1));
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
