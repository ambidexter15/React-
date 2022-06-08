import logo from './logo.svg';
import './App.css';
import Hey from './Component/Hello.js/Hello';
// import { Hello } from './Component/Hello.js/Hello';
import Welcome from './Component/Welcome';
function App() {
  return (
    <div className="App">
     <h1>Hello world</h1>
     <Hey/>
     <Welcome/>
    </div>
  );
}

export default App;
