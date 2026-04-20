type props = {
    name : string,
    grade : string

};


export default function Profile({name,grade} : props) {

    return(
        <>
            <p>이름: {name}</p>
            <p>학년: {grade}학년</p>
        </>
    );

}