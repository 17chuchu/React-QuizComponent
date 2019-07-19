import React, {Component} from 'react';

import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends React.Component {


    constructor(props)
    {
        super(props)
        this.state = {
            incorrectAnswer: false
        }
    }

    handleClick(buttontext)
    {
        this.setState({incorrectAnswer: !(buttontext == this.props.quiz_question.answer)})
        if(buttontext == this.props.quiz_question.answer)
        {
            this.props.showNextQuestionHandler()
        }
    }
    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    {
                        this.props.quiz_question.answer_options.map((answer_option,index) => {
                            return <QuizQuestionButton key={index} button_text={answer_option} clickHandler={this.handleClick.bind(this)}/>
                        })
                    }
                </section>
                {this.state.incorrectAnswer ? <p className={'error'}>Sorry, that's not right</p> : null}
            </main>
        );
    }
}

export default QuizQuestion;
