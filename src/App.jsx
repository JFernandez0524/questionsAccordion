import { useState } from 'react';
import data from './data';
import Question from './Question';

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleAnswer = (id) => {
    const newId = id === activeId ? null : id;
    setActiveId(newId);
  };

  return (
    <main>
      <section className='container'>
        <h1>Questions</h1>
        {questions.map((question) => {
          console.log(question);
          return (
            <Question
              {...question}
              toggleAnswer={toggleAnswer}
              activeId={activeId}
            />
          );
        })}
      </section>
    </main>
  );
};
export default App;
