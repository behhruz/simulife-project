import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Coins from './components/Coins';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Coins />} />
      </Routes>
    </Router>
  );
}

export default App;
