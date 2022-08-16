import { useState} from "react";
import AddState from "./addstate";

const State = () => {
    
    /* 
    const[state , setState] = useState("state 처음 시작")
    
    const[변수명, 변수 값을 바꿔줄 함수명] = useState(변수의 기본값)
    setState("값") ====>  변수의 값이 바뀜
    
    const onChangeText = () => {
        setState("두번째 시작하는 state")
    }

    return(
    
        <div onClick={onChangeText}>
            {state}
        </div>
    );
    */
    
    // state의 값이 객체일 때 값을 추가하려면?? (불변성을 지키면서)
    
    // 1. spread operator 사용
    // ==> setState([...state, {id:4, name:"홍길동"}]) 
    
    // 2. immerjs와 같은 라이브러리를 이용

    
    const[userList, setUserList] = useState([
        
        {
            id:1,
            name:"홍동근"
        },
        {
            id:2,
            name:"홍동근2"
        },
        {
            id:3,
            name:"홍동근3"
        },

    ])


    const onClickEvent = (idValue, nameValue) => {
        setUserList([...userList, {id: idValue, name: nameValue}])
    } // 추가

    const onRemoveHandler = (e) => {
        console.log(typeof e.target.value)
        const removeState = userList.filter(
            (item) => item.id !== parseInt(e.target.value)  // target value 가 string이라 형변환해야됌
        ); // 원본 데이터를 훼손한 상태가 아님
        setUserList(removeState)         
    } // 삭제방법 1


    const onRemoveHandler_2 = (itemS) => {
        console.log(typeof itemS.name) 
        const removeState = userList.filter((item) => item.id !== itemS.id); // target value 가 number라 형변환안해도됌
        setUserList(removeState)
    } // 삭제방법 2   
    
    // useRef로 결과값 배열로 가져오기
    // const removeButtonArr = useRef([]); 
    // const showelements =  () => { console.log(removeButtonArr) }


    
    
    return(
        <>
            {userList.map((item)=> (
                <div key={item.id}>
                    {item.id}. {item.name}
                    <button 
                        value={item.id} //string으로 반환
                        // onClick={onRemoveHandler} 삭제 1번방법
                        onClick={() => onRemoveHandler_2(item)} // 삭제 2번방법  (해당 객체에 해당하는 모든 정보를 매게변수로 전달받을 수 있다)
                        // onClick={showelements} // 결과값배열로 가져오기
                        // ref={(el)=> (removeButtonArr[item.name] = el)}  ==> 결과값 배열로 가져오기(querselectorAll 같은것) 
                    >삭제</button>
                </div>
            ))}
            <AddState 
                onClickEvent={onClickEvent}
                stateId={ userList.length > 0 && userList[userList.length-1].id}
            />
        </>
    );
};

export default State;