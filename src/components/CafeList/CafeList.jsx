import "./CafeList.css";
import Cafe from "../Cafe/Cafe";

// rsc(ReactStatelessComponent) + Tab ===> build the skeleton

const CafeList = () => {
  return (
    <div className="cafe-list">
      <Cafe/>
    </div>
  );
};

export default CafeList;
