import React, {Component} from 'react'
import PossibleAnswer from './PossibleAnswer'

class Quiz extends Component {
    constructor(props) {
        super()

        this.state = {
            playerScore : 0,
            questions: [
                {
        
                  title: "What animal barks?",
                  possibleAnswers: ["Dog", "Cat"],
                  rightAnswer: "Dog",
                  playerChoice: null
                },
                {
                  title: "What animal is more closely related to a tiger?",
                  possibleAnswers: ["Dog", "Cat"],
                  rightAnswer: "Cat",
                  playerChoice: null
                }]
        }
    }

    updatePlayerScore() {
        const playerScore = this.state.questions.filter(q => q.rightAnswer === q.playerChoice).length
        this.setState({playerScore})
        console.log("New player score:", playerScore)  
    }
    answerQuestion(index, choice) {
        const answeredQuestion = this.state.questions[index]
        answeredQuestion.playerChoice = choice

        const allQuestions = this.state.questions
        allQuestions[index] = answeredQuestion

        this.setState({questions : allQuestions}, () => {this.updatePlayerScore()} ) //callback playerscore!

    }

    displayResult(index) {
        const question = this.state.questions[index]
        if(!question.playerChoice) {return}

        if(question.playerChoice === question.rightAnswer) {
            return  <p>Your answer is correct!</p>
        }
        else {
            return <p>your answer is incorrect!</p>    
        }
        }
    
    displayQuestion(index)
    {
        console.log(index)
        const question = this.state.questions[index]
        return (
            <div>
                <p>{question.title}</p>
                <br />
                {question.possibleAnswers.map((possAns, indexAns) => <PossibleAnswer key={indexAns}
                    action={() => this.answerQuestion(index, question.possibleAnswers[indexAns])}
                    possibleAnswer={possAns}/>)}

                


                {/* <button 
                    onClick={() => this.answerQuestion(index, question.possibleAnswers[0])}>{question.possibleAnswers[0]}</button>
                <button
                    onClick={() => this.answerQuestion(index, question.possibleAnswers[1])}>{question.possibleAnswers[1]}</button>
                <br />
                */}
                {this.displayResult(index)}
            </div>
        )
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Quiz</h1>
                {this.state.questions.map((question, index) => this.displayQuestion(index))}

                {/* {this.displayQuestion(0)}
                {this.displayQuestion(1)} */}
            </div>
        )
    }
}
export default Quiz;
