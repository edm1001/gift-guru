import { useState } from 'react';
import categories from '../db/Shop/Categories.json';
import questions from '../db/Question.json';

const QuizPage = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState([]);

  const handleAnswer = (questionIndex, answer) => {
    setAnswers(prevAnswers => ({ ...prevAnswers, [questionIndex]: answer }));
    if (questionIndex < questions.length - 1) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    let filteredProducts = [];
    categories.forEach(category => {
      if (category.name === answers[0]) {
        category.subcategories.forEach(subcategory => {
          subcategory.products.forEach(product => {
            if (
              (answers[1] === "$0 - $50" && product.price <= 50) ||
              (answers[1] === "$51 - $100" && product.price > 50 && product.price <= 100) ||
              (answers[1] === "$101 - $200" && product.price > 100 && product.price <= 200) ||
              (answers[1] === "$201+" && product.price > 200)
            ) {
              filteredProducts.push(product);
            }
          });
        });
      }
    });
    setResults(filteredProducts);
  };

  return (
    <section className="bg-gray-200 min-h-screen pt-16 pb-8 text-center">
      <div className="bg-gradient-to-r from-blue to-lightblue h-screen flex flex-col justify-center items-center">
        <h2 className="text-center text-black text-4xl font-semibold">Quiz Page</h2>
        {quizStarted ? (
          currentQuestion < questions.length ? (
            <div>
              <p>{questions[currentQuestion].question}</p>
              {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(currentQuestion, option)} className="bg-darkblue text-white p-2 rounded m-2">
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <div>
              <h3>Recommended Products</h3>
              {results.length > 0 ? (
                results.map((product, index) => (
                  <div key={index}>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <img src={product.images[0].url} alt={product.images[0].alt} />
                    <p>Website: {product.website}</p>
                    <p>Company: {product.company}</p>
                  </div>
                ))
              ) : (
                <p>No products match your criteria.</p>
              )}
            </div>
          )
        ) : (
          <button onClick={() => setQuizStarted(true)} className="bg-darkblue text-white p-2 rounded">Take Quiz!</button>
        )}
      </div>
    </section>
  );
};

export default QuizPage;
