import { useEffect, useState, useCallback} from "react";

const Effect = () => {
    
    const [color, setColor] = useState("red");

    const onChangeColor = useCallback(()=>{
        if(color==="red"){
            setColor("blue")
        } else{
            setColor("red")
        }
    },[color])  // 함수를 만들 때 거의 무조건 사용

    useEffect(()=>{
        console.log("페이지가 열렸습니다")
    },[])

    useEffect(()=> {       
            console.log("색이 변경되었습니다")
    },[color])
    
    return(
        <>
            <div>Effect</div>
            <input type="text" readOnly value={color} style={ {color} }/>
            <button onClick={onChangeColor}>변경</button>
        </>

    ) 
}

export default Effect


 // useEffect 작동원리

// useEffect(()=> {
//     if(postDone){ 실행문 } --> 페이지가 열릴때 실행  
//     return () => console.log("안녕하세요!");  -->  페이지가 닫힐 때 실행
// },[postDone]);