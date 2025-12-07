import React,{useState,useRef} from "react";
import beetroot from "../src/Assets/beetroot.png"
import wheat from "../src/Assets/wheat.png"
let data=["","","","","","","","",""] //sort of a storage ig
const TicTacToe =()=>{
   let [count,setCount]=useState(0);
    let [lock,setLock]=useState(false);
    let titleRef=useRef(null);

  const toggle=(e,num)=>{
    if(lock){
      return 0;
    }
    if(count %2===0){
     e.target.innerHTML=`<img src='${beetroot}'>`
     data[num]="x";
     setCount(count+1);
    }
    else{
     e.target.innerHTML=`<img src='${wheat}'>`
     data[num]="o";
     setCount(count+1);
    }
    checkWin();
  }
  const checkWin=()=>{
    if(data[0]===data[1]&& data[1]===data[2]&&data[2]!=="")
      {
        won(data[2]);
      }
      else if(data[3]===data[4]&& data[4]===data[5]&&data[5]!=="")
      {
        won(data[5]);
      }
     else if(data[6]===data[7]&& data[7]===data[8]&&data[8]!=="")
      {
        won(data[8]);
      }
       else if(data[0]===data[3]&&  data[3]===data[6]&&data[6]!=="")
      {
        won(data[6]);
      }
       else if(data[1]===data[4]&& data[4]===data[7]&&data[7]!=="")
      {
        won(data[7]);
      }
       else if(data[2]===data[5]&& data[5]===data[8]&&data[8]!=="")
      {
        won(data[8]);
      }
       else if(data[0]===data[4]&& data[4]===data[8]&&data[8]!=="")
      {
        won(data[8]);
      } 
       else if(data[2]===data[4]&& data[4]===data[6]&&data[6]!=="")
      {
        won(data[6]);
      }
  }
  const won=(winner)=>{
    setLock(true);
    if(winner==='x')
    {
      titleRef.current.innerHTML=`Congratulations:<img src=${beetroot}>`
    }
    else{
       titleRef.current.innerHTML=`Congratulations:<img src=${wheat}>`
    }
  }
  const reset=()=>{
    setLock(false);
     data=["","","","","","","","",""]
    titleRef.current.innerHTML="TIC TAC TOE"
  }
   return (
    <div>
       <h1 className="title" ref={titleRef}>TIC TAC TOE!!</h1>
    <div className="box">
        <div className="square" onClick={(e)=>{toggle(e,0)}}></div>
        <div className="square" onClick={(e)=>{toggle(e,1)}}></div>
        <div className="square" onClick={(e)=>{toggle(e,2)}}></div>
        <div className="square" onClick={(e)=>{toggle(e,3)}}></div>
        <div className="square" onClick={(e)=>{toggle(e,4)}}></div>
        <div className="square" onClick={(e)=>{toggle(e,5)}}></div>
        <div className="square" onClick={(e)=>{toggle(e,6)}}></div>
        <div className="square" onClick={(e)=>{toggle(e,7)}}></div>
        <div className="square" onClick={(e)=>{toggle(e,8)}}></div>
    
    </div>
    <button className="reset" onClick={reset}>Reset</button>
    </div>
  );
}
export default TicTacToe;