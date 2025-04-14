import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { EndOfGame } from './views/EndOfGame';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/end-of-game" element={<EndOfGame />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
