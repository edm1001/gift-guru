import { useState } from "react";
import questions from "../db/Question.json";
// import categories from '../db/Shop/Categories.json';
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const QuizPage = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (answer) => {
    setAnswers((prevAnswers) => {
      const newAnswers = { ...prevAnswers, [currentQuestion]: answer };
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prevIndex) => prevIndex + 1);
      } else {
        setQuizStarted(false); // End the quiz
      }
      return newAnswers;
    });
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section className="bg-gray-200 min-h-screen pt-16 pb-8 text-center relative">
      <div className="bg-gradient-to-r from-gray-100 to-lightblue h-screen flex flex-col justify-center items-center">
        {!quizStarted && (
          <>
            <h2 className="text-center text-black text-4xl font-semibold">
              Quiz Page
            </h2>
            <p className="mt-1 text-xs">
              Answer the following questions to find personalized products!
            </p>
          </>
        )}
        {quizStarted && (
          <>
            {currentQuestion > 0 && (
              <button
                onClick={handleBack}
                className="absolute top-20 left-4 text-black p-2 rounded hover:bg-blue-700"
              >
                <MdOutlineKeyboardBackspace size={24} color="grey" />
              </button>
            )}
            {currentQuestion < questions.length ? (
              <div>
                <p className="text-xl font-semibold">
                  {questions[currentQuestion].question}
                </p>
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
            )}
          </>
        )}
        {!quizStarted && (
          <button
            onClick={() => setQuizStarted(true)}
            className="bg-blue text-white p-2 rounded mt-4 hover:opacity-70"
          >
            Start Quiz
          </button>
        )}
      </div>
    </section>
  );
};

export default QuizPage;
