import './App.css';
import Header from './Component/Header/Header';
import ItemCtn from './Component/ItemCtn/ItemCtn';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <ItemCtn />
      </div>
    </div>
  );
}

export default App;
