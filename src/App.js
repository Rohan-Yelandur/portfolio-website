import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import ARMusical from "./Pages/Projects/ARMusical";
import AIMathTutor from "./Pages/Projects/AIMathTutor";
import MemoryAllocator from "./Pages/Projects/MemoryAllocator";
import ZipReader from "./Pages/Projects/ZipReader";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/ar-musical" element={<ARMusical />} />
          <Route path="/projects/ai-math-tutor" element={<AIMathTutor />} />
          <Route path="/projects/memory-allocator" element={<MemoryAllocator />} />
          <Route path="/projects/zip-reader" element={<ZipReader />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;