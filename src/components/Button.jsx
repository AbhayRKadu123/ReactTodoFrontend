export default function Button({BtnName,OnClick}){
return <>
<button onClick={OnClick}>{BtnName}</button>
</>
}