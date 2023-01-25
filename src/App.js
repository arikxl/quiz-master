import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Quiz from './pages/Quiz';
import Results from './pages/Results';


const App = () => {
  
  const [name, setName] = useState('');

  const fetchQuestions = () => {


  }


  return (
    <BrowserRouter>

    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage fetchQuestions={fetchQuestions}
            name={name} setName={setName} />} />
          <Route path="/quiz" element={  <Quiz />} />
          <Route path="/result" element={  < Results/>} />
          <Route path="*" element={  < NotFound/>} />

        </Routes>
    </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
