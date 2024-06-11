import Counter from './components/Counter';
import Footer from './components/Footer';
import Galery from './components/Galery';
import Nav from './components/Nav';

function App() {

  const targetDate = '2023-03-22T20:00:00';

  return (
    <div className="App">
      <Nav/>
      <Counter targetDate={targetDate}/>
      <Galery />
      <Footer />
    </div>
  );
}

export default App;