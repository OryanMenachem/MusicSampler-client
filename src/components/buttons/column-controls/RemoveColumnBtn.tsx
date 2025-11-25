import { useGetContext } from "../../../hooks";
import type {
  NotesContext,
  ColumnsContext,
  HandleRemoveColumnArgs,
} from "../../../types/types";

export default function RemoveColumnBtn(): React.JSX.Element {
  const { notes, setNotes } = useGetContext("notesContext") as NotesContext;
  const { columns, setColumns } = useGetContext(
    "columnsContext"
  ) as ColumnsContext;
  const handleClick = () => {
    handleRemoveColumn({ notes, setNotes, columns, setColumns });
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
