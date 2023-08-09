import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
function App() {
  return (
    <div id='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<AllPlayers />} />
        <Route path='/players/:id' element={<SinglePlayer />} />
      </Routes>
    </div>
  );
}

export default App;
