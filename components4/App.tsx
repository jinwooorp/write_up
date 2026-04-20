import ActionButton from "./components/ActionButton";
import Profile from "./components/Profile";
import Title from "./components/Title";

function App() {
     const printAlert = () => {
        alert("학생 정보가 확인되었습니다.");
    };

    return(
        <>
            <Title />
            <Profile name="홍길동" grade="2"/>
            <ActionButton text="확인" onClick={printAlert}/>
        </>
    );
}

export default App
