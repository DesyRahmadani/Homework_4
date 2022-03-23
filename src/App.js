import logo from './logo.svg';
import './App.css';
import data from './Music';

function App() {
  const handClick= () => {
    console.log("Selected")
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="Play Music">
          <h2>Music</h2>
          <img src={data.album.images[0].url}/>
          <h2>{data.album.name}</h2>
          <h3>{data.album.artists[0].name}</h3>
          <button onClick={handClick}>Yess</button>
        </div>
      </header>
    </div>
  );
}

export default App;
