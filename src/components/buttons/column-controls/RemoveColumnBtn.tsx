import { useContext } from "react";
import { notesContext } from "../../../contexts/Notes.context";
import { columnsContext } from "../../../contexts/Columns.context";
import type { NotesContext, ColumnsContext } from "../../../types/types";
import { handleRemoveColumn } from "../button.service";



export default function RemoveColumnBtn(): React.JSX.Element {
  const { notes, setNotes } = useContext(notesContext) as NotesContext;
  const { columns, setColumns } = useContext(columnsContext) as ColumnsContext;
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
