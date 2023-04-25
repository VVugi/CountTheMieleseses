import React, { useEffect, useState } from 'react'
import './App.css'
import Mielesese from "./components/Mielesese"
import Confetti from 'react-confetti';
import MielesesePNG from "./img/mielesese.png"

function App()
{
   const lastLevel = 10;

   const [subtitle, setSubtitle] = useState("Press the button to start!!");

   const [lost, setLost] = useState(false);
   const [winner, setWinner] = useState(false);
   const [answer, setAnswer] = useState();

   const [analizeTime, setAnalizeTime] = useState(false);
   const [countingTime, setCountingTime] = useState(false);
   const [writingTime, setWritingTime] = useState(false);
   const [level, setLevel] = useState(1);

   const [mieleseses, setMieleseses] = useState([]);
   const [amount, setAmount] = useState(0);
   const [spawnedMieleseses, setSpawnedMieleseses] = useState();

   let interval1;
   let interval2;

   function spawnMieleseses()
   {
      let newAmount;

      if(lost)
      {
         setLevel(1);
         setLost(false);

         newAmount = Math.ceil(Math.random() * 4) + (2 * 1);
      }
      else
      {
         newAmount = Math.ceil(Math.random() * 4) + (2 * level);
      }

      setAmount(newAmount);
      setSubtitle("Count the Mieleseses!!!!");
   }

   useEffect(() => {
      if(amount != 0)
      {
         let newMieleseses = [];

         for(let i = 1; i <= amount; i++)
         {
            newMieleseses.push({
               top: (-53 * i) + Math.floor(Math.random() * 320) + 50 + "px",
               left: (Math.floor(Math.random() * -500) - 50) + "px",
               movement: "movement " + ((Math.random() * 5) + 2) + 's  linear 1'
            });
         }
   
         setMieleseses(newMieleseses);
         setCountingTime(true);
         setLevel(level + 1);
      }
   }, [amount]);

   useEffect(() => {
      if(mieleseses.length != 0)
      {
         setSpawnedMieleseses(mieleseses.map(mielesese =>
            <Mielesese
               top={mielesese.top}
               left={mielesese.left}
               movement={mielesese.movement}
            />
         ));

         interval1 = setInterval(function() {
            clearInterval(interval1);
            setWritingTime(true);
            setSubtitle("Type in your answer!!");
         }, 7000);

         return () => clearInterval(interval1);
      }
   }, [mieleseses]);

   useEffect(() => {
      if(writingTime)
      {
         interval2 = setInterval(function() {
            setAnalizeTime(true);

            clearInterval(interval2);
         }, 5000);

         return () => clearInterval(interval2);
      }
   }, [writingTime]);

   useEffect(() => {
      if(analizeTime)
      {
         setWritingTime(false);
         setCountingTime(false);

         if(answer != amount)
         {
            setLost(true);
            setSubtitle("You lost!!!");
         }
         else
         {
            if(level == lastLevel)
            {
               setSubtitle("Correct!! Last level!!!");
            }
            else if(level == lastLevel + 1)
            {
               setSubtitle("You did it!!!!!!!!");
               setWinner(true);
            }
            else
            {
               setSubtitle("Correct!! Keep going!!!");
            }
         }

         setAnalizeTime(false);
      }
   }, [analizeTime]);

   function updateAnswer(event)
   {
      const {value} = event.target;

      setAnswer(value);
   }

   return (
      <main>
         <div className="title">
            Count the Mieleseses!!!!
         </div>

         <div className="container">
            {winner && <Confetti
               width={460}
               height={660}
               numberOfPieces={69}
            />}

            <div className="game">
               {countingTime && spawnedMieleseses}
            </div>

            <div className="input-menu">
               {(level <= lastLevel || lost) && !countingTime && <input className="start-button" onClick={spawnMieleseses} type="button" value={lost ? "Restart" : level == 1 ? "Start" : "Start level " + level}></input>}
               {!lost && writingTime && <input className="number-input" onChange={updateAnswer} type="number"></input>}
               
               {winner &&
               <div className="dancing-mielesese-container">
                  <img className="dancing-mielesese" src={MielesesePNG}></img>
               </div>}
            </div>
         </div>

         <div className="subtitle">
            {subtitle}
         </div>
      </main>
   )
}

export default App