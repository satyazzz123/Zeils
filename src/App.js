import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { GrGallery } from 'react-icons/gr';

import Resort from './Components/Resort';
import Gallery from './Components/Gallery';
import Tickets from './Components/Tickets';
import Slide2 from './Components/Slide2';
import Slide3 from './Components/Slide3';
import Slide4 from './Components/Slide4';
import Slide5 from './Components/Slide5';
import Slide6 from './Components/Slide6';
import Slide7 from './Components/Slide7';
import Vacation from './Components/Vacation';
import Country from './Components/Country';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route  exact path="/gallery" element={<Gallery/>}/>
          <Route  exact path="/slide1" element={<Slide2/>}/>
          <Route  exact path="/slide3" element={<Slide3/>}/>
          <Route  exact path="/slide4" element={<Slide4/>}/>
          <Route  exact path="/slide5" element={<Slide5/>}/>
          <Route  exact path="/slide6" element={<Slide6/>}/>
          <Route  exact path="/slide7" element={<Slide7/>}/>
          <Route  exact path="/vacation" element={<Country/>}/>
          <Route  exact path="/vacation1" element={<Vacation/>}/>

        
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
