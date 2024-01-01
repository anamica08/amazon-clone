import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
//should only contain  very hgh level stuff in this file
function App() {
  return (
    <Router>
        <div className="app">
            <h1>Build amazon clone</h1>
            <Routes>
                <Route path="/checkout" element={<h1>checkout</h1>}>

                </Route>
                <Route path="/login" element={<h1>Login</h1>}>

                </Route>
                <Route path="/" element={<h1>Default page</h1>} >

                </Route>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
