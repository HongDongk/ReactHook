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