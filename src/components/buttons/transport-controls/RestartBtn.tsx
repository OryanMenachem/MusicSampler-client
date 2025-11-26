import { useGetContext } from "../../../hooks";
import type { ActiveColumnContext, RestartContext } from "../../../types/types";

export default function RestartBtn(): React.JSX.Element {
  const { setActiveColumnIndex: setActiveColumn } = useGetContext(
    "activeColumnContext"
  ) as ActiveColumnContext;
  const { setRestart } = useGetContext("restartContext") as RestartContext;
  const handleClick = () => {
    setActiveColumn((prev) => (prev = 1));
    setRestart((prev) => !prev);
  };
  return (
    <button className="btn restart--btn" onClick={handleClick}>
      Restart
    </button>
  );
}
