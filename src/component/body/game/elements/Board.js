import React from "react";
import Square from "./Square";
import styles from "./Board.module.css";
class Board extends React.Component {
    /*constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }*/
    /*handleClick(i) {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = this.state.squares.slice(); /!* .slice() => 배열 복사 *!/
        if(calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
        });
    }*/
    renderSquare(i){
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }
    render() {
        //const status = "Next Player: " + (this.state.xIsNext ? 'X' : 'O');
        /*const winner = calculateWinner(this.state.squares);
        let status;
        if(winner){
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }*/

        return (
            <div>
                {/*<div className={"status"}>{status}</div>*/}
                <div className={styles.boardRow}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className={styles.boardRow}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className={styles.boardRow}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
export default Board;