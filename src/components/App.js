import "../styles/App.css";
import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText:
        "Which property references the DOM object that dispatched an event?",
      answerOptions: [
        { answerText: "target", isCorrect: true },
        { answerText: "self", isCorrect: false },
        { answerText: "object", isCorrect: false },
        { answerText: "source", isCorrect: false },
      ],
    },
    {
      questionText:
        "How is a forEach statement different from a for statement?",
      answerOptions: [
        {
          answerText: "Only a for statement uses a callback function.",
          isCorrect: false,
        },
        {
          answerText:
            "A for statement is generic, but a forEach statement can be used only with an array.",
          isCorrect: true,
        },
        {
          answerText:
            "Only a forEach statement lets you specify your own iterator.",
          isCorrect: false,
        },
        {
          answerText:
            "A forEach statement is generic, but a for statement can be used only with an array.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Which operator returns true if the two compared values are not equal?",
      answerOptions: [
        { answerText: "<>", isCorrect: false },
        { answerText: "~", isCorrect: false },
        { answerText: "!==", isCorrect: true },
        { answerText: "==!", isCorrect: false },
      ],
    },
   
    {
      questionText:
        "Which statement is the correct way to create a variable called rate and assign it the value 100?",
      answerOptions: [
        { answerText: "let rate = 100;", isCorrect: true },
        { answerText: "let 100 = rate;", isCorrect: false },
        { answerText: "100 = let rate;", isCorrect: false },
        { answerText: "rate = 100;", isCorrect: false },
      ],
    },
    {
      questionText:
        'Which statement creates a new object using the Person constructor? Which statement creates a new Person object called "student"?',
      answerOptions: [
        { answerText: "var student = construct Person();", isCorrect: false },
        { answerText: "var student = Person();", isCorrect: false },
        { answerText: "var student = construct Person;", isCorrect: false },
        { answerText: "var student = new Person();", isCorrect: true },
      ],
    },
    {
      questionText: "How does a function create a closure?",
      answerOptions: [
        {
          answerText:
            "It returns a reference to a variable in its parent scope.",
          isCorrect: true,
        },
        {
          answerText: "It reloads the document whenever the value changes.",
          isCorrect: false,
        },
        {
          answerText: "It completes execution without returning.",
          isCorrect: false,
        },
        {
          answerText: "It copies a local variable to the global scope.",
          isCorrect: false,
        },
      ],
    },
    
    {
      questionText: "Which method converts JSON data to a JavaScript object?",
      answerOptions: [
        { answerText: "JSON.parse()", isCorrect: true },
        { answerText: "JSON.fromString();", isCorrect: false },
        { answerText: "JSON.toObject()", isCorrect: false },
        { answerText: "JSON.stringify()", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which statement is the correct way to create a variable called rate and assign it the value 100?",
      answerOptions: [
        { answerText: "let rate = 100;", isCorrect: true },
        { answerText: "let 100 = rate;", isCorrect: false },
        { answerText: "100 = let rate;", isCorrect: false },
        { answerText: "rate = 100;", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which statement is the correct way to create a variable called rate and assign it the value 100?",
      answerOptions: [
        { answerText: "let rate = 100;", isCorrect: true },
        { answerText: "let 100 = rate;", isCorrect: false },
        { answerText: "100 = let rate;", isCorrect: false },
        { answerText: "rate = 100;", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which Object method returns an iterable that can be used to iterate over the properties of an object? ",
      answerOptions: [
        { answerText: "Object.keys()", isCorrect: true },
        { answerText: "Object.loop()", isCorrect: false },
        { answerText: "Object.each()", isCorrect: false },
        { answerText: "Object.get()", isCorrect: false },
      ],
    },
    {
      questionText: "When would you use a conditional statement? ",
      answerOptions: [
        {
          answerText:
            "When you want your code to choose between multiple options.",
          isCorrect: true,
        },
        {
          answerText:
            "When you want to reuse a set of statements multiple times.",
          isCorrect: false,
        },
        {
          answerText: "When you want to group data together.",
          isCorrect: false,
        },
        {
          answerText: "When you want to loop through a group of statement.",
          isCorrect: false,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
