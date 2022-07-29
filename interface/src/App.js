import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Testnet from './pages/testnet';
import Mainnet from './pages/mainnet';

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="bottom-right"
        reverseOrder={true}
        toastOptions={{
          style: {
            width: '450px',
            height: '180px',
            color: '#FFF',
            backgroundColor: 'rgba(255, 255, 255, .3)',
            backdropFilter: 'blur(10px)',
            border: '1px solid hsla(0, 0%, 65%, 0.158)',
            padding: '8px 16px',
          },
        }}
      />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/testnet" />} />
        <Route path="/testnet" element={<Testnet />} />
        <Route path="/mainnet" element={<Mainnet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
