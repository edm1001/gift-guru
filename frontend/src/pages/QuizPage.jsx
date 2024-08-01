import { useState } from 'react';
// import categories from '../db/Shop/Categories.json';
import questions from '../db/Question.json';

const QuizPage = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (answer) => {
    // Save the answer for the current question
    setAnswers(prevAnswers => ({ ...prevAnswers, [currentQuestion]: answer }));

    // Move to the next question or end the quiz if there are no more questions
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed
      setQuizStarted(false); 
      alert('Quiz completed!');
    }
  };

  return (
    <section className="bg-gray-200 min-h-screen pt-16 pb-8 text-center">
      <div className="bg-gradient-to-r from-gray-100 to-lightblue h-screen flex flex-col justify-center items-center">
        <h2 className="text-center text-black text-4xl font-semibold">Quiz Page</h2>
        <p className='mt-1 text-xs'>Answer the following questions to proceed!</p>
        {quizStarted ? (
          currentQuestion < questions.length ? (
            <div>
              <p className="text-xl font-semibold">{questions[currentQuestion].question}</p>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="bg-darkblue text-white p-2 rounded m-2"
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <div>
              <h3>Quiz Completed</h3>
              {/* Display results or a message here */}
            </div>
          )
        ) : (
          <button onClick={() => setQuizStarted(true)} className="bg-blue text-white p-2 rounded mt-4 hover:opacity-70">
            Start Quiz
          </button>
        )}
      </div>
    </section>
  );
};

export default QuizPage;
