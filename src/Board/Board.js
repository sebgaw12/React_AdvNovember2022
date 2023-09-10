import React, {Component} from 'react'
import Card from './Card'
class Board extends Component {
    constructor(props) {
        super()
        this.state = {
            cards : [1,2,3,4,5] 
        }
    }

    render() {
        console.log(this.state.cards)

        return (
            <div>
                <h1>Board</h1>
                {/* {this.state.cards.map((card, i) => <p key={i}>{card}</p>)} */}
                {this.state.cards.map((card) => <Card value={card} />)}
            </div>
        )
    }
}
export default Board;
