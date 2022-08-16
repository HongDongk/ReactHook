import { useCallback, useState } from "react"

const Callback = () => {
    
    const [color, setColor] = useState("red");

    const onChangeColor = useCallback(()=>{
        if(color==="red"){
            setColor("blue")
        } else{
            setColor("red")
        }
    },[color])  // 함수를 만들 때 거의 무조건 사용
    
    return (
        <>
            <div>Callback</div>
            <input type="text" readOnly value={color} style={ {color} }/>
            <button onClick={onChangeColor}>변경</button>
        </>

    )
}
export default Callback