import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
//should only contain  very hgh level stuff in this file
function App() {
  return (
    <Router>
        <div className="app">
            <Routes>
                <Route path="/checkout" element={<h1>checkout</h1>}>

                </Route>
                <Route path="/login" element={<h1>Login</h1>}>

                </Route>
                <Route path="/" element={
                  <Header/>
                } >

                </Route>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
