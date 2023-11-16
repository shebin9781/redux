import './App.css';
import Counter from './component/Counter';

function App() {


  return (
    <div className="d-flex align-items-center justify-content-center w-100 flex-column" style={{height:"100vh"}}>
      <div className='d-flex align-items-center justify-content-center flex-column p-5 rounded' style={{backgroundColor:"black", color:"white"}}>
        <h1 className='text-success fw-bolder'>Counter Application</h1>
        <Counter/>
      </div>
      
    </div>

  );
}

export default App;
