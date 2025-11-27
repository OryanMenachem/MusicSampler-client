import { useGetContext } from "../../../hooks/";
import type { InstrumentSelectorContext } from "../../../types/types";

export default function InstrumentSelectorBtn(): React.JSX.Element {
  const { instrument, dispatch } = useGetContext(
    "instrumentSelectorContext"
  ) as InstrumentSelectorContext;

  return (
    <button
      className={`btn instrument-selector--btn ${instrument}`}
      onClick={() => {
        dispatch({ type: "CHANGE_INSTRUMENT" });
      }}
    ></button>
  );
}
