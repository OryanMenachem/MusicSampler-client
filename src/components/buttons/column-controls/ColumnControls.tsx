import AddColumnBtn from "./AddColumnBtn";
import RemoveColumnBtn from "./RemoveColumnBtn";

export default function ColumnControls(): React.JSX.Element {
  return (
    <div className="column-controls">
      <AddColumnBtn />
      <RemoveColumnBtn />
    </div>
  );
}
