import './App.css';
import Adress from './Component/Profile/Address';
import Full from './Component/Profile/FullName';
import Photo from './Component/Profile/Photoprofile';


function App() {
  return (
    <div className="App">
      <Photo/>
      <Full/>
      <Adress/>
    </div>
  );
}

export default App;
