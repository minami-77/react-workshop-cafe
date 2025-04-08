import "./CafeList.css";
import Cafe from "../Cafe/Cafe";

// rsc(ReactStatelessComponent) + Tab ===> build the skeleton

const CafeList = ({cafeDatas}) => {

  return (
    <div className="cafe-list">
      {/* <Cafe cafeData = {cafeDatas[0]}/>
      <Cafe cafeData = {cafeDatas[1]}/>
      <Cafe cafeData = {cafeDatas[2]}/> */}

      {/* increment cafeDatas array and create components (block of UI <Cafe/>) with key and value */}
      {/* like this -> [<Cafe key="Cafe A" cafeData={...} />, <Cafe key="Cafe B" cafeData={...} />, <Cafe key="Cafe C" cafeData={...} />] */}
      {cafeDatas.map(cafeData => <Cafe key={cafeData.title} cafeData={cafeData} />)}
    </div>
  );
};

export default CafeList;
