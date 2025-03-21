export default function ToDoList({Lst}){
    let NewLst=Lst.map((ele)=>{return<li key={ele.key}>{ele.Task}{ele.DelBtn}</li>})
    return <>
    <ul>
        {NewLst}
    </ul>
    </>
}