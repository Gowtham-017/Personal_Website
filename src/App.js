import './App.css';
import About from './components/pages/About';
import Footer from './components/pages/Footer';
import Socials from './components/pages/Socials';
import Home from './components/pages/Home';
function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Socials/>
      <Footer/>
    </div>
  );
}
export default App;