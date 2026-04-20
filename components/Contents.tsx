type props = {
    message : string
}

export default function Contents({message} : props) {

    return(
        <p>{message}</p>
    );


}