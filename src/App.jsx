import './App.css';
import Navbar from './components/Navbar';
import CafeList from './components/CafeList/CafeList';
import Sidebar from './components/Sidebar/Sidebar';


const App =()=>{
  return(
    <div className="app-frame">
      <Navbar/>
      <div className="app-body">
        <Sidebar/>
        <CafeList/>
      </div>
    </div>
  );
};

export default App;
