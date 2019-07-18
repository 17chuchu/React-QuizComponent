import React, { Component } from 'react'

let quizData = require('./quiz_data.json')



class Quiz extends React.Component
{

    state = {
        quiz_position: 1
    }

    constructor(props)
    {
        super(props)
    }

    render()
    {
        console.log(quizData)
        return (
            <div>
                <div className='QuizQuestion'>
                    {quizData['quiz_questions'][this.state.quiz_position - 1]['instruction_text']}
                </div>
            </div>
        )
    }
}



export default Quiz;