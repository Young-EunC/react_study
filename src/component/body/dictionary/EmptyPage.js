import {Link} from "react-router-dom";

export default function EmptyPage(){
    return (
        <>
            <span>잘못된 접근입니다.</span>
            <Link to={"/"}>돌아가기</Link>
        </>
    );
}