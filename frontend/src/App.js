// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';





function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link href="/">Amazona</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>

        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
