import { useGetContext } from "../../../hooks";
import type { ColumnCountContext } from "../../../types/types";

export default function AddColumnBtn(): React.JSX.Element {
  const { setColumnCount } = useGetContext(
    "columnCountContext"
  ) as ColumnCountContext;
  const plusSign = "+";
  return (
    <button
      className="btn add-column--btn"
      onClick={() => {
        setColumnCount((prevCount) => prevCount + 1);
      }}
    >
      {plusSign}
    </button>
  );
}
