import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./login/Login"
import Homepage from './homepage/Homepage.jsx';
import About from './about/About.jsx';
import Balance from './balance/Balance.jsx';
import Permit from './permit/Permit.jsx';
import Transaction from './transaction/Transaction.jsx';
import Validation from './validation/Validation.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/balance" element={<Balance />} />
        <Route path="/permit" element={<Permit />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/validation" element={<Validation />} />
      </Routes>
    </Router>
  );
}

export default App
