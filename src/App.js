import Navbar from "./components/Navbar/navbar";
import Homes from "./components/Homes/home";
import Bottoms from "./components/Bottoms/bottom";
import Photos from "./components/Photos/photos";
import Contact from"./components/Contact/contact";
import Fotter from "./components/Fotter/fotter";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Homes/>
     <Bottoms/>
     <Photos/>
     <Contact/>
     <Fotter/>
    </div>
  );
}

export default App;
