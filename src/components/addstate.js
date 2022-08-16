import { useState, useRef } from "react";



const AddState = ({onClickEvent, stateId}) => {

    const [name,setName] = useState('');
    const nameInput = useRef(null); // HTML태그(input태그)에 접근하게해줌

    const onChangeInput = (e) => {
        setName(e.target.value)
        // useState의 변수를 바꿔주는 함수는 비동기 함수이므로 지금 현재 바뀐 값이 지정이 되지 않는다
    }
    
    const onAddStateHandler = () => {
        onClickEvent(stateId+1, name )
        setName('')
    }

    const onResetHandler = () => {
        setName('')
        nameInput.current.focus();
    }

    const onEnterAddState = (e) => {
        if(e.key === "Enter"){
          onClickEvent(stateId + 1, name);
          setName('');
          alert("값이 추가되었습니다")
        }
    }
    
    
    
    return (
        <>
          <input 
              type="text"
              placeholder="이름을 입력하세요"
              value={name}
              onChange={onChangeInput} // 이벤트 객체를 받기 위해서는 이벤트함수속성 = {실행함수명}으로 실행해야한다. 
                                       // 단, 이벤트객체 함수를 받지 않고 두가지 이상의 함수를 실행하고자 할 때는
                                       // 이벤트함수속성 = { () => {함수1(), 함수2()} } 으로 실행해야한다.
              ref={nameInput}
              onKeyPress={onEnterAddState}  // 키가 입력됬을 때 받는 이벤트
          />
          <button onClick={onAddStateHandler}>추가</button>
          <button onClick={onResetHandler}>초기화</button>
        </> 
    );

}

export default AddState;