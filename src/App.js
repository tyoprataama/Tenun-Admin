import Navbar from './component/navbar/Navbar';
import Sidebar from './component/sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar/>
    <div className='container'>
      <Sidebar/>
      <div className='other'>other</div>
    </div>
    </div>
  );
}

export default App;
