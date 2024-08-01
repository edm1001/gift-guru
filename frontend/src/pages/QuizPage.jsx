import { useState } from 'react';
import questions from '../db/Question.json';
// import categories from '../db/Shop/Categories.json';

const QuizPage = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (answer) => {
    // Save the answer
    setAnswers(prevAnswers => {
      const newAnswers = { ...prevAnswers, [currentQuestion]: answer };
      // Move to the next question
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prevIndex => prevIndex + 1);
      } else {
        setQuizStarted(false); // End quiz
      }
      return newAnswers;
    });
  };

  return (
    <section className="bg-gray-200 min-h-screen pt-16 pb-8 text-center">
      <div className="bg-gradient-to-r from-gray-100 to-lightblue h-screen flex flex-col justify-center items-center">
        {!quizStarted && (
          <>
            <h2 className="text-center text-black text-4xl font-semibold">Quiz Page</h2>
            <p className='mt-1 text-xs'>Answer the following questions to find personalized products!</p>
          </>
        )}
        {quizStarted ? (
          currentQuestion < questions.length ? (
            <div>
              <p className="text-2xl mb-4">{questions[currentQuestion].question}</p>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="bg-blue text-white p-2 rounded m-2 hover:opacity-60"
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