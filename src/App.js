import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import './App.css';
import Nav from'./components/Nav/Nav.js'
import Rules from './components/Rules/Rules.js';
import SignIn from "./components/SignIn/SignIn";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
         <Route path="/rules" element={<Rules/>}>
        </Route>

        <Route path='/signin' element={<SignIn />} ></Route>

      </Routes>
    </Router>
    
  );
}

export default App;
