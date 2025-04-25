import { useState, useEffect } from "react";
import questions from "../db/Question.json";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const QuizPage = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [matchedProducts, setMatchedProducts] = useState([]);

  useEffect(() => {
    if (!quizStarted && Object.keys(answers).length === questions.length) {
      const selectedTags = Object.values(answers);

      fetch("/api/products/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tags: selectedTags }),
      })
        .then((res) => res.json())
        .then((data) => setMatchedProducts(data))
        .catch((err) => console.error("Error fetching curated products:", err));
    }
  }, [quizStarted, answers]);
          
  const handleAnswer = (selectedOption) => {
    setAnswers((prevAnswers) => {
      const newAnswers = {
        ...prevAnswers,
        [questions[currentQuestion].id]: selectedOption.tag,
      };
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prevIndex) => prevIndex + 1);
      } else {
        setQuizStarted(false);
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
            <button
              onClick={() => setQuizStarted(true)}
              className="bg-blue text-white p-2 rounded mt-4 hover:opacity-70"
            >
              Start Quiz
            </button>
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
                    {option.answer}
                  </button>
                ))}
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Quiz Completed</h3>
                <p className="mb-4">Here are {matchedProducts.length} products you might like:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {matchedProducts.map((product) => (
                    <div
                      key={product._id}
                      className="bg-white p-4 rounded shadow" 
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded mb-2"
                      />
                      <h4 className="font-bold">{product.name}</h4>
                      <p className="text-sm text-gray-600">
                        {product.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default QuizPage;
