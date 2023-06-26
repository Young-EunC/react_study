import React from "react";
import DictHead from "./DictHead";
import DayList from "./DayList";
import Day from "./Day";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./EmptyPage";

class Dictionary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            day: 1, /* 기본값으로 1을 넣어줌 */
        };
    }
    render() {
        return (
            <div className={"in_page_body"}>
                {/*<DictHead/>
                <DayList/>
                <Day day={this.state.day}/>*/}
                <BrowserRouter>
                    <DictHead/>
                    <Routes>
                        <Route path="/" element={<DayList/>} />
                        <Route path="/day/:day" element={<Day/>} />
                        <Route path="*" element={<EmptyPage/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
export default Dictionary;