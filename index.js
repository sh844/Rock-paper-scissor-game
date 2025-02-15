import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';
import App from './App';
// import reportWebVitals from './reportWebVitals';

let r=0,p=0,s=0;
let x=0,y=0;

function Game() {

  const [choice,setChoice] = useState('')
  const [compChoice,setcompChoice] = useState('')

  const [yScore,setyScore] = useState(x);
  const [cScore,setcScore] = useState(y); 

  function Rock(){
    
    if(p===0&&s===0){
      setChoice('Rock')
      r=1;
    }
 
  if(p===1){
   setcompChoice('Rock')
    r=0;
    p=0;
    s=0;
    setyScore(++x)
  }
  if(s===1){
    setcompChoice('Rock')
    r=0;
    p=0;
    s=0;
    setcScore(++y)
  }
//   if(choice==='Paper'&&compChoice==='Rock'){
//       setyScore(++x)
//    }
//    if(choice==='Scissor'&&compChoice==='Rock'){
//      setcScore(++y)
// }

  }

  function Paper(){
    
    if(r===0&&s===0){
      setChoice('Paper')
      p=1;
    }

    if(r===1){
      setcompChoice('Paper')
      r=0;
      p=0;
      s=0;
      setcScore(++y)
    }
    if(s===1){
      setcompChoice('Paper')
      r=0;
      p=0;
      s=0;
      setyScore(++x)
    }
    // if(choice==='Scissor'&&compChoice==='Paper'){
    //   setyScore(++x)
    // }
    // if(choice==='Rock'&&compChoice==='Paper'){
    //   setcScore(++y)
    //  }
  }

  function Scissor(){
    
    if(r===0&&p===0){
      setChoice('Scissor')
      s=1;
    }
   
    if(r===1){
      setcompChoice('Scissor')
      r=0;
      p=0;
      s=0;
      setyScore(++x)
    }
    if(p===1){
      setcompChoice('Scissor')
      r=0;
      p=0;
      s=0;
      setcScore(++y)
    }

  //   if(choice==='Rock'&&compChoice==='Scissor'){
  //     setyScore(++x)
  //   }
  //   if(choice==='Paper'&&compChoice==='Scissor'){
  //     setcScore(++y)
  //  }
  }

  return (
    <>

    <h1 style={{textAlign:'center'}}>Rock Paper and Scissor Game</h1>

    <div className='xyz' > 
      <input type="submit" value="Rock" className='abc' onClick={Rock}></input>
      <input type="submit" value="Paper" className='abc' onClick={Paper}></input>
      <input type="submit" value="Scissor" className='abc' onClick={Scissor}></input>
    </div>

      <h2 style={{textAlign:'center'}}>Your Choice:{choice}</h2>
      <h2 style={{textAlign:'center'}}>Computer Choice:{compChoice}</h2>
      <h1 style={{textAlign:'center'}}>Your Score:{yScore}</h1>
      <h1 style={{textAlign:'center'}}>Computer Score:{cScore}</h1>
       
    </>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Game/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
