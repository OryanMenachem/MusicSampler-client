import { useContext } from "react";
import { columnsContext } from "../../../contexts/Columns.context";
import type { ColumnsContext } from "../../../types/types";

export default function AddColumnBtn(): React.JSX.Element {
  const { setColumns } = useContext(columnsContext) as ColumnsContext;
  const plusSign = "+";
  return (
    <button
      className="btn add-column--btn"
      onClick={() => {
        setColumns((prev) => prev + 1);
      }}
    >
      {plusSign}
    </button>
  );
}
