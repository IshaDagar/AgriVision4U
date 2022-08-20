import './App.css';
import Page1 from './Pages/Page1';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Page2 from './Pages/Page2';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/questions" element={<Page2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
