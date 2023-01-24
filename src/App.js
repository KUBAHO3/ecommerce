
import './App.css';
import { ProductCard } from './components/ProductCard';
import { PreNavbar } from './components/PreNavbar';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Featured } from './components/Featured';
import { Footer } from './components/Footer';

function App() {
  
  return (
    <div className="App">
      
      <PreNavbar/>
      <Navbar/>
      <Header/>
      <Featured/>
      <div className='container-fluid row m-3'>
      <ProductCard/></div>
      <Footer/>
    </div>
  );
}

export default App;
