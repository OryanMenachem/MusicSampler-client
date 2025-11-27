import AddColumnBtn from "./AddColumnBtn";
import RemoveColumnBtn from "./RemoveColumnBtn";

export default function ColumnControlsLayout(): React.JSX.Element {
  return (
    <div className="column-controls-layout">
      <AddColumnBtn />
      <RemoveColumnBtn />
    </div>
  );
}
