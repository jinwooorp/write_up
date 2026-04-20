type props = {
    text : string,
    onClick : () => void
}


export default function ActionButton({text,onClick} : props) {

    return(
        <button onClick={onClick}>{text}</button>
    );
   
}