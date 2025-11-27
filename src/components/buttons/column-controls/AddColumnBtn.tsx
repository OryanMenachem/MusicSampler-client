import { useGetContext } from "../../../hooks";
import type { ColumnsContext } from "../../../types/types";

export default function AddColumnBtn(): React.JSX.Element {
  const { setColumnCount } = useGetContext("columnCountContext") as ColumnsContext;
  const plusSign = "+";
  return (
    <button
      className="btn add-column--btn"
      onClick={() => {
        setColumnCount((prev) => prev + 1);
      }}
    >
      {plusSign}
    </button>
  );
}
