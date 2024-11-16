import Navbar from "./component/Navbar/navbar";
import Intro from './component/Intro/intro';
import About from './component/About/about';
import Service from"./component/service/service";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Service/>
      
    </div>
  );
}

export default App;
