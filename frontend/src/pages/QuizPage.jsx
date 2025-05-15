import { useState, useEffect } from "react";
import questions from "../db/Question.json";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const QuizPage = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [matchedProducts, setMatchedProducts] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    if (quizCompleted) {
      const selectedTags = Object.values(answers).flat();

      fetch("/api/products/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tags: selectedTags }),
      })
        .then((res) => res.json())
        .then((data) => setMatchedProducts(data))
        .catch((err) => console.error("Error fetching curated products:", err));
    }
  }, [quizCompleted]);

  const handleCheckboxChange = (optionTag) => {
    setAnswers((prevAnswers) => {
      const currentSelections =
        prevAnswers[questions[currentQuestion].id] || [];
      if (currentSelections.includes(optionTag)) {
        return {
          ...prevAnswers,
          [questions[currentQuestion].id]: currentSelections.filter(
            (tag) => tag !== optionTag
          ),
        };
      } else {
        return {
          ...prevAnswers,
          [questions[currentQuestion].id]: [...currentSelections, optionTag],
        };
      }
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevIndex) => prevIndex + 1);
    } else {
      setQuizCompleted(true); // End the quiz
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section className="bg-gray-200 min-h-screen pt-16 pb-8 text-center relative">
      <div className="bg-gradient-to-r from-gray-100 to-lightblue h-screen flex flex-col justify-center items-center">
        {!quizStarted && !quizCompleted && (
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
        {quizStarted && !quizCompleted && (
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
              <div className="flex flex-col items-center">
                <p className="text-xl font-semibold mb-4">
                  {questions[currentQuestion].question}
                </p>

                <div className="flex flex-col items-start space-y-2">
                  {questions[currentQuestion].options.map((option, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={
                          answers[questions[currentQuestion].id]?.includes(
                            option.tag
                          ) || false
                        }
                        onChange={() => handleCheckboxChange(option.tag)}
                        className="w-5 h-5 text-blue-600"
                      />
                      <span className="text-black">{option.answer}</span>
                    </label>
                  ))}
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="mt-6 bg-blue text-white px-4 py-2 rounded hover:opacity-70"
                >
                  Next
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Quiz Completed</h3>
                <p className="mb-4">
                  Here are {matchedProducts.length} products you might like:
                </p>
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
