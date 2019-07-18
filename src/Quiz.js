import QuizQuestion from './QuizQuestion.js';
import React, { Component } from 'react';

let quizData = require('./quiz_data.json');

class Quiz extends React.Component {
  state = {
    quiz_position: 1,
  };

  constructor(props) {
    super(props);
  }

  render() {
    console.log(quizData);
    return (
      <div>
        <QuizQuestion
          quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
        />
      </div>
    );
  }
}

export default Quiz;
