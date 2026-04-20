export default function ButtonAction() {

    const Clicked = () =>{
        console.log("클릭됨");
    }
    
    const onMouse = () => {
        console.log("마우스 올라감");
    }

    const underMouse = () => {
        console.log("마우스 나감");
    }


    return(
        <button onClick={Clicked} onMouseEnter={onMouse} onMouseLeave={underMouse}>
            이벤트 버튼
        </button>
    );

}