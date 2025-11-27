import { useGetContext } from "../../../hooks";
import type {
  NotesContext,
  ColumnCountContext,
  HandleRemoveColumnArgs,
} from "../../../types/types";

export default function RemoveColumnBtn(): React.JSX.Element {
  const { notes, setNotes } = useGetContext("notesContext") as NotesContext;
  const { columnCount, setColumnCount } = useGetContext("columnCountContext") as ColumnCountContext;

  const handleClick = () => {
    handleRemoveColumn({
      notes,
      setNotes,
      columnCount,
      setColumnCount,
    });
  };
  const minusSign = "-";
  return (
    <button className="btn remove-column--btn" onClick={handleClick}>
      {minusSign}
    </button>
  );
}

const handleRemoveColumn = ({
  notes,
  setNotes,
  columnCount,
  setColumnCount,
}: HandleRemoveColumnArgs) => {
  const initialColumns = 32;
  if (columnCount === initialColumns) {
    return;
  }
  for (const noteId in notes) {
    const note = notes[noteId];
    if (note.columnCount === columnCount && note.isNoteOn) {
      setNotes((prev) => {
        const newNotes = { ...prev };
        delete newNotes[noteId];
        return newNotes;
      });
    }
  }
  setColumnCount((prev) => prev - 1);
};
  