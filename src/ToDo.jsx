import Input from "./components/input"
import Button from "./components/Button"
import ToDoList from "./components/ToDoList"
import { useEffect, useState } from "react"

export default function ToDo(){
    let [InputValue,SetInputValue]=useState('')
    let [Lst,SetLst]=useState([])
    const fetchMessage = async () => {
        try {
          const response = await fetch("http://localhost:8080/gettodo");
          const data = await response.json();
         console.log(data) // Update state with the response
        } catch (error) {
          console.error("Error fetching message:", error);
        }
      };
      useEffect(()=>{
        fetchMessage()
      },[])
    
      useEffect(()=>{
        fetchMessage()
      },[])
function OnDelete(num){
   SetLst((prev)=>{
    let res=prev.filter((ele)=>{
        if(ele.key!=num){
            return ele
        }
    })
    return res
   })
}
    async function onClick(){
        let num=Math.random();
        let task={key:num,Task:InputValue,DelBtn:<Button OnClick={()=>{OnDelete(num)}} BtnName={'delete task'}/>}
        SetLst((prev)=>{
          return [...prev,task]
        })
        console.log(InputValue)
        try {
            const response = await fetch("http://localhost:8080/AddToDo", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({InputValue}),
            });
      
            const result = await response.json();
            console.log("Response from server:", result);
          } catch (error) {
            console.error("Error sending data:", error);
          }
        SetInputValue('')
        console.log('on click function executed'+task)
    }
    return (<>
    <div className="ToDo">
    <h1>React Todo</h1>
    <Input placeholder={'Enter Your Task'} type={"text"} Val={InputValue} SetVal={SetInputValue}></Input>
    <Button BtnName={'Add Task'} OnClick={onClick}></Button>
<ToDoList Lst={Lst}></ToDoList>
    </div>
    </>)
}