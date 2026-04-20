import Header from "./components/Header";
import Contents from "./components/Contents";
import Button from "./components/Button";

function App() {

  const printAlert = () => {
        alert("버튼 클릭됨");
    };

    return(
      <>
        <Header/>
        <Contents message="안녕하세요 react!"/>
        <Button text="클릭하세요" onClick={printAlert}/>
      </>
    );
}

export default App
