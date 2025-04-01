import './index.css';
import { createRoot } from 'react-dom/client';
import App from "./App";

const rootContainer = document.getElementById("root");
// render component with 'createRoot()'
const root = createRoot(rootContainer);

// const Hello = ({name, age}) => {
//   // const name = props.name;
//   // const age = props.age;

//   // props ==>{name:"remy", age:"21"}
//   // const { name, age } = props;

//   //{interpolation}
//   return <h1>Hi I am {name}, {age}yrs-old!</h1>;
// };


// display component with 'root.render(<component/>)' -> insert () to root
root.render(<App/>);
