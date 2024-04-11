import './App.css'
import Canvas from './components/Canvas'
import Home from './components/Home'

function App() {

  return (
    <>
      <Canvas />
      <div className="App">
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App
