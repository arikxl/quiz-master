import axios from 'axios';
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
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  
  
  const fetchQuestions = async (category ="", difficulty="") => {
    const {data} = await axios.get(`https://opentdb.com/api.php?amount=10${category &&`&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`)
    
    setQuestions(data.results)
  }


  return (
    <BrowserRouter>

    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage fetchQuestions={fetchQuestions}
            name={name} setName={setName} />} />
          <Route path="/quiz" element={<Quiz name={name} questions={questions}
            score={score} setScore={setScore} setQuestions={setQuestions } />} />
          <Route path="/result" element={< Results score={ score} />} />
          <Route path="*" element={  < NotFound/>} />

        </Routes>
    </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
