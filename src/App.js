
import './App.css';
import { AuthButton } from './components/AuthButton/index.js';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar/index.js';
import { Trending } from './components/Trending';

function App() {
  return (
    <div className='grid md:grid-cols-5'>
      {/*Navbar */} 
      <Navbar />

      <main className='md:col-span-4 px-12 py-6 bg-cyan-50 '>
        <AuthButton />
        <Header />
        <Trending />
      </main>
    </div>
  );
}

export default App; 
