import type { TransportControlsContext } from "../../../contexts/context/TransportControls.context";
import { useGetContext } from "../../../hooks";

export default function RestartBtn(): React.JSX.Element {
  const { dispatch } = useGetContext(
    "transportControlsContext"
  ) as TransportControlsContext;
  const handleClick = () => {
    dispatch({ type: "RESTART" });
  };
  return (
    <button className="btn restart--btn" onClick={handleClick}>
      Restart
    </button>
  );
}
