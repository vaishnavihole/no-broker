import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import RentalAgreement from './pages/RentalAgreement';
import Guide from './pages/Guide';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rental-agreement" element={<RentalAgreement />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
