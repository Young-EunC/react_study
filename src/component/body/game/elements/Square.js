import React from "react";
import styles from "./Square.module.css";


export default Square;
function Square(props){ /* 함수컴포넌트. state 없이 render 함수만 가짐. */
    /* props = 태그의 속성값을 전달하는것처럼 해당 컴포넌트를 호출할때 호출하는곳에서 전달하는 값 */
    return (
        <button className={styles.square} onClick={props.onClick}>
            {props.value} {/* <Square value="어떤값"> 이렇게 전달된 값을 렌더링함. */}
        </button>
    );
}

/*class Square extends React.Component {
    /!*constructor(props) {
        super(props); /!* 생성자 정의. 항상 이 구문으로 시작해야함. *!/
        this.state = {
            value: null,
        };
    }*!/
    render() {
        return (
            <button
                className={"square"}
                onClick={() => { this.props.onClick()}}
            >
                {this.props.value}
            </button>
        );
    }
}*/